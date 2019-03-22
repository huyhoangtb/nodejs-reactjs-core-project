import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {devToolsEnhancer} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'react-router-redux';
import {autoRehydrate, persistStore} from 'redux-persist';
import mySaga from 'sagas/';
import reducers from 'reducers/index';
import {blacklist, whitelist} from 'reducers/persist-keys';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const Store = createStore(rootReducer, undefined,
  compose(
    autoRehydrate(), // auto persistence
    applyMiddleware(historyMiddleware),
    applyMiddleware(sagaMiddleware),
    devToolsEnhancer ? devToolsEnhancer() : (f) => f),
);

sagaMiddleware.run(mySaga);
// begin periodically persisting the store
persistStore(Store, {whitelist, blacklist});
export default Store;
