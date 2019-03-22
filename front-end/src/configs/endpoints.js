const prefix = `${process.env.REACT_APP_SERVER_API_URL}/api/v1`;

export default {
  cndServer: process.env.REACT_APP_CDN_SERVER_URL,
  user: {
    register: `${prefix}/user/register`,
    login: `${process.env.REACT_APP_SERVER_API_URL}/oauth/token`,
    logout: `${prefix}/user/logout`,
    changePassword: (iid) => `${prefix}/user/${iid}/change-password`,
    getUser: `${prefix}/user/detail`,
  },
  twoFa: {
    generateTwoFa: `${prefix}/secret/generate`,
    generateQrCode: `${prefix}/secret/qr-code`,
    saveTwoFa: `${prefix}/secret/save`,
  },
  context: {
    publicContext: `${prefix}/context`,
  }
};
