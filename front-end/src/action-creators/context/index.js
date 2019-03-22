export const contextActionTypes = {
  LOAD_PUBLIC_APP_CONTEXT: 'LOAD_PUBLIC_APP_CONTEXT',
  SET_PUBLIC_APP_CONTEXT: 'SET_PUBLIC_APP_CONTEXT'
}

export default {
  getApplicationContext() {
    return {type: contextActionTypes.LOAD_PUBLIC_APP_CONTEXT};
  },
  setApplicationContext(publicContext) {
    return {type: contextActionTypes.SET_PUBLIC_APP_CONTEXT, publicContext};
  }
};
