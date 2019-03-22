import {takeEvery} from 'redux-saga';
import Requester from 'common/network/http/Request';
import {call, fork, put} from 'redux-saga/effects';
import endpoints from 'configs/endpoints.js';
import contextActions, {contextActionTypes} from 'action-creators/context';

function* getPublicContext(action) {
  
  const response = yield call(
    Requester.get,
    endpoints.context.publicContext
  );
  
  
  if (response && response.success) {
    yield put(contextActions.setApplicationContext(response.result));
  }
  
}

export const getPublicContextAction = function* getPublicContextSaga() {
  yield* takeEvery(contextActionTypes.LOAD_PUBLIC_APP_CONTEXT, getPublicContext);
};

export default [
  fork(getPublicContextAction),
];
