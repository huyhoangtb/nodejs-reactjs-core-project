/**
 * Created by Peter Hoang Nguyen on 3/17/2017.
 */

import {commonActionTypes} from 'action-creators/common';

const commonState = {
  showLoadingPageIcon: false
};

const CommonState = (state = commonState, action) => {
  let newState = {};
  switch (action.type) {
    case commonActionTypes.SHOW_LOADING_PAGE:
      newState = {
        ...state,
        showLoadingPageIcon: action.showLoadingPageIcon
      };
      break;
    default:
      return state;
    
  }
  return newState;
};
export default CommonState;
