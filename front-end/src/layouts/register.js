import {LayoutRegistered} from "layouts/LayoutHelper";
import defaultLayout from "layouts/default";
import FrontendLayout from "layouts/frontend";
import AdminLayout from "layouts/admin";
import OauthLayout from "layouts/frontend/oauth-layout";

export default {
  [LayoutRegistered.defaultLayout]: {
    component: defaultLayout,
    isDefault: true,
  },
  
  [LayoutRegistered.frontend]: {
    component: FrontendLayout,
  },
  [LayoutRegistered.adminLayout]: {
    component: AdminLayout,
  },
  [LayoutRegistered.oauthLayout]: {
    component: OauthLayout
  }
};
