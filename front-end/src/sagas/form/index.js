import {takeEvery} from 'redux-saga';
import Requester from 'common/network/http/Request';
import {call, fork, put} from 'redux-saga/effects';
import {summitFormTypes} from 'schema-form/action-creators';

function* handleSummitForm(action) {
  
  const {values, options, url} = action;
  let method = action.method || 'post';
  const response = yield call(
    Requester[method],
    url,
    values
  );
  
  if (response && (response.success || (options && response[options.checkSuccessOnField]))) {
    if (options && options.dispatchAfterSuccess) {
      if (options.dispatchFullResponse) {
        yield put(options.dispatchAfterSuccess(response));
      } else {
        yield put(options.dispatchAfterSuccess(response.result));
      }
    }
    if (options && options.onSuccess) {
      if (options.dispatchFullResponse) {
        options.onSuccess(response, values);
      } else {
        options.onSuccess(response.result, values);
      }
      
    }
    return;
  }
  if (options && options.onFail) {
    options.onFail(response, values);
  }
}

export const handleSummitFormAction = function* handleSummitFormSaga() {
  yield* takeEvery(summitFormTypes.HANDLE_SUMMIT_FORM, handleSummitForm);
};

export default [
  fork(handleSummitFormAction),

];
