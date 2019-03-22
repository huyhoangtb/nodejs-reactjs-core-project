import {contextActionTypes} from 'action-creators/context';

const initContext = {
  publicContext: {
    bankings: []
  }
}

const UserState = (state = initContext, action) => {
  let newState = {};
  switch (action.type) {
    case contextActionTypes.SET_PUBLIC_APP_CONTEXT:
      newState = {
        ...state,
        publicContext: {...action.publicContext}
      };
      break;
    default:
      return state;
  }
  return newState;
};
export default UserState;
