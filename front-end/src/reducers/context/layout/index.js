import { layoutContextActionTypes } from 'action-creators/layout-context/index';

const layoutContextDefaultState = {
  isOpenLeftMenu: true,
  topMenu: {
    schema: null,
    
  },
  menuLeft: {
    schema: null,
    
  },
  subMenuLeft: {
    schema: null,
    
    messages: null,
  },
  subMenuTop: {
    schema: null,
    lastBreadcrumbName: null,
  },
  subMenuRight: {
    schema: null,
    
  },
  breadcrumb: {
    schema: null,
    
  },
};

const layoutContext = (state = layoutContextDefaultState, action) => {
  let newState = {};
  switch (action.type) {
    case layoutContextActionTypes.SET_STATE_OF_LEFT_MENU:
      newState = {
        ...state,
        isOpenLeftMenu: action.isOpenLeftMenu,
      };
      break;
    case layoutContextActionTypes.SET_MENU_LEFT:
      newState = {
        ...state,
        menuLeft: { ...action.data },
      };
      break;
    case layoutContextActionTypes.SET_SUBMENU_LEFT:
      newState = {
        ...state,
        subMenuLeft: { ...action.data },
      };
      break;
    
    case layoutContextActionTypes.SET_MENU_TOP:
      newState = {
        ...state,
        topMenu: { ...action.data },
      };
      break;
    
    case layoutContextActionTypes.SET_SUBMENU_TOP:
      newState = {
        ...state,
        subMenuTop: { ...action.data },
      };
      break;
    
    case layoutContextActionTypes.SET_BREADCRUMB:
      newState = {
        ...state,
        menuLeft: { ...action.data },
      };
      break;
    default:
      return state;
  }
  return newState;
};
export default layoutContext;
