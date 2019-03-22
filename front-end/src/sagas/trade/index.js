import {takeEvery} from 'redux-saga';
import Requester from 'common/network/http/Request';
import {call, fork, put} from 'redux-saga/effects';
import endpoints from 'configs/endpoints';
import tradeActions, {tradeActionTypes} from 'action-creators/trade';

function* getExchangeRate(action) {
  const result = yield call(
    Requester.get,
    endpoints.trade.getExchangeRate,
  );
  
  
  if (result && result.success) {
    // set exchange rate to store
    if (result.result)
      yield put(tradeActions.setExchangeRage(result.result));
    if (result.wallets)
      yield put(tradeActions.setUserWallets(result.wallets));
    // if (options && options.onSuccess) {
    //   options.onSuccess(setResult.setResult);
    // }
  } else {
    // if (options && options.onFail) {
    //   options.onFail(setResult);
    // }
  }
  
  // yield put(storeSiteConfig(defaultSiteConfig));
}

export const getExchangeRateAction = function* createNewAccountSaga() {
  yield* takeEvery(tradeActionTypes.GET_EXCHANGE_RATE, getExchangeRate);
};

export default [
  fork(getExchangeRateAction),
];
