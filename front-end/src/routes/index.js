import React from 'react';
import Admin from 'components/admin';
import LoginPage from 'layouts/common/login';
import {LayoutRegistered} from 'layouts/LayoutHelper';
import RootLayout from 'layouts';

const routes = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/security/user/login',
        component: LoginPage,
        layout: LayoutRegistered.frontend,
      },
      {
        path: '/timetable-viewer',
        component: Admin,
        layout: LayoutRegistered.adminLayout,
      },
      {
        path: '/',
        component: Admin,
        layout: LayoutRegistered.frontend,
      },
      
      // {
      //   ...adminRoute
      // },
      // {
      //   path: '/user',
      //   component: SubMainLayoutHelper,
      //   layout: LayoutRegistered.oauthLayout,
      //   routes: [
      //     {
      //       path: '/user/logout',
      //       component: LogoutPage,
      //       exact: true,
      //     },
      //     {
      //       path: '/user/login',
      //       component: LoginPage,
      //       exact: true,
      //     },
      //     {
      //       path: '/user/register',
      //       component: RegisterNewUser,
      //       exact: true,
      //       layout: LayoutRegistered.oauthLayout
      //     },
      //   ]
      // },
    ],
  },

];

export default routes;
