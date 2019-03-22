export const userActionTypes = {
  LOGIN_TO_APPLICATION: 'LOGIN_TO_APPLICATION',
  ON_RECEIVED_USER_INFO: 'ON_RECEIVED_USER_INFO',
  GET_USER_INFO: 'GET_USER_INFO',
  ON_RECEIVED_TOKEN: 'ON_RECEIVED_TOKEN',
  LOGOUT_FROM_APPLICATION: 'LOGOUT_FROM_APPLICATION',
  REGISTER_NEW_ACCOUNT: 'REGISTER_NEW_ACCOUNT',
  CHANGED_PASSWORD: 'CHANGED_PASSWORD',
  REQUEST_CHANGED_PASSWORD_LINK: 'REQUEST_CHANGED_PASSWORD_LINK',
};

export default {
  logout: (options) => ({
    type: userActionTypes.LOGOUT_FROM_APPLICATION,
    options,
  }),
  login: (user, options) => ({
    type: userActionTypes.LOGIN_TO_APPLICATION,
    user,
    options,
  }),
  getUserInfo: (options) => ({
    type: userActionTypes.GET_USER_INFO,
    options,
  }),
  receivedUserInfo: (user) => ({
    type: userActionTypes.ON_RECEIVED_USER_INFO,
    user,
  }),
  receivedToken: (token) => ({
    type: userActionTypes.ON_RECEIVED_TOKEN,
    token,
  }),
  registerNewAccount: (user, options) => ({
    type: userActionTypes.REGISTER_NEW_ACCOUNT,
    user,
    options,
  }),
  changedPassword: (data, options) => ({
    type: userActionTypes.CHANGED_PASSWORD,
    data,
    options,
  }),
  requestChangePasswordLink: (email, options) => ({
    type: userActionTypes.REQUEST_CHANGED_PASSWORD_LINK,
    email,
    options,
  }),
};
