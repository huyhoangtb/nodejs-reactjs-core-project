import {takeEvery} from 'redux-saga';
import Requester from 'common/network/http/Request';
import {call, fork, put} from 'redux-saga/effects';
import endpoints from 'configs/endpoints';
import userActions, {userActionTypes} from 'action-creators/user';

function* createNewAccount(action) {
  const {user, options} = action;
  
  const result = yield call(
    Requester.postAsForm,
    endpoints.user.register,
    user,
  );
  if (result && result.success) {
    yield put(userActions.receivedUserInfo(result.result));
    if (options && options.onSuccess) {
      options.onSuccess(result.result, user);
    }
  } else {
    if (options && options.onFail) {
      options.onFail(result);
    }
  }
  
  // yield put(storeSiteConfig(defaultSiteConfig));
}

function* login(action) {
  const {user, options} = action;
  const loginInfo = {
    username: user.username || user.email,
    password: user.password
  };
  const result = yield call(
    Requester.postAsForm,
    endpoints.user.login,
    loginInfo,
  );
  
  if (result && typeof result === 'object' && result.access_token) {
    yield put(userActions.receivedToken(result));
    if (options && options.onSuccess) {
      options.onSuccess(result);
    }
  } else {
    if (options && options.onFail) {
      options.onFail(result);
    }
  }
  
  // yield put(storeSiteConfig(defaultSiteConfig));
}


function* changePassword(action) {
  const {data, options} = action;
  const result = yield call(
    Requester.postJson,
    endpoints.user.changePassword(data.iid),
    data,
  );
  
  if (result && typeof result === 'object' && result.access_token) {
    yield put(userActions.receivedToken(result));
    if (options && options.onSuccess) {
      options.onSuccess(result);
    }
  } else {
    if (options && options.onFail) {
      options.onFail(result);
    }
  }
  
  // yield put(storeSiteConfig(defaultSiteConfig));
}


function* logout(action) {
  const {options} = action;
  const result = yield call(
    Requester.get,
    endpoints.user.logout
  );
  yield put(userActions.receivedToken({}));
  yield put(userActions.receivedUserInfo({}));
  if (options && options.onSuccess) {
    options.onSuccess(result);
  }
  
}

function* getUserInfo(action) {
  const {options} = action;
  const response = yield call(
    Requester.get,
    endpoints.user.getUser
  );
  if (response && response.success) {
    yield put(userActions.receivedUserInfo(response.result));
  }
  
  if (options && options.onSuccess) {
    options.onSuccess(response.result);
  }
  
}

export const createNewAccountAction = function* createNewAccountSaga() {
  yield* takeEvery(userActionTypes.REGISTER_NEW_ACCOUNT, createNewAccount);
};
export const loginAction = function* loginSaga() {
  yield* takeEvery(userActionTypes.LOGIN_TO_APPLICATION, login);
};
export const changePasswordAction = function* changePasswordSaga() {
  yield* takeEvery(userActionTypes.CHANGED_PASSWORD, changePassword);
};
export const logoutAction = function* logoutSaga() {
  yield* takeEvery(userActionTypes.LOGOUT_FROM_APPLICATION, logout);
};
export const getUserInfoAction = function* getUserInfoSaga() {
  yield* takeEvery(userActionTypes.GET_USER_INFO, getUserInfo);
};

export default [
  fork(createNewAccountAction),
  fork(loginAction),
  fork(logoutAction),
  fork(changePasswordAction),
  fork(getUserInfoAction),
];
