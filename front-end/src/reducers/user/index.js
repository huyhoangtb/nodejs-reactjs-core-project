import {userActionTypes} from 'action-creators/user';
import {twoFaActionTypes} from 'action-creators/two-fa';
//
let userState = localStorage.getItem('reduxPersist:user');
if (userState) {
  try {
    userState = JSON.parse(userState);
  } catch (ex) {
    userState = {
      info: {},
      token: {}
    };
  }
}

const UserState = (state = userState || {info: {}, token: {}}, action) => {
  let newState = {};
  switch (action.type) {
    case userActionTypes.ON_RECEIVED_USER_INFO:
      newState = {
        ...state,
        info: action.user
      };
      break;
    case userActionTypes.ON_RECEIVED_TOKEN:
      newState = {
        ...state,
        token: action.token
      };
      break;
    
    case twoFaActionTypes.SAVE_TWO_FA_TO_SERVER_SUCCESS:
      newState = {
        ...state,
        info: {...state.info, enable2FaStatus: true}
      };
      break;
    default:
      return state;
  }
  return newState;
};
export default UserState;
