import {takeEvery} from "redux-saga";
import {fork} from "redux-saga/effects";

function* common(action) {
  
}

export const commonAction = function* commonSaga() {
  yield* takeEvery('COMMON_SAGA*', common);
};

export default [
  fork(commonAction),
];
