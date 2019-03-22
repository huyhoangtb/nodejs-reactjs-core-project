import React from 'react';
import async from 'routes/async';
import SubMainLayoutHelper from 'layouts/SubMainLayoutHelper';
import {LayoutRegistered} from 'layouts/LayoutHelper';

const ROOT = '/admin';

export default {
  path: ROOT,
  component: SubMainLayoutHelper,
  layout: LayoutRegistered.adminLayout,
  routes: [
    {
      path: ROOT,
      exact: true,
      component: async(() => import('components/admin')),
    },
    {
      path: `${ROOT}/management`,
      component: SubMainLayoutHelper,
      layout: LayoutRegistered.adminLayout,
      routes: [
        {
          path: `${ROOT}/management/user`,
          exact: true,
          component: async(() => import('components/admin/management/user')),
        }
      ]
    },
    {
      path: `${ROOT}/notification`,
      exact: true,
      component: async(() => import('components/admin/notification')),
    }
  ]
};
