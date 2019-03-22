import Translate from 'i18n';

export default [
  {
    title: Translate.t1('CMS'),
    url: 'admin/cms',
    icon: {
      position: 'left',
      type: 'user'
    },
    subMenu: [
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("News"),
        url: 'admin/cms/news'
      },
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("Categories"),
        url: 'admin/cms/category'
      }
    ]
  },
  
  {
    title: Translate.t1('location'),
    url: '/admin/location',
    icon: {
      position: 'left',
      type: 'user'
    },
    subMenu: [
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("places"),
        url: '/admin/location/place'
      },
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("Tourist sites"),
        url: '/admin/location/tourist'
      }
    ]
  },
  
  {
    title: Translate.t3('CRM'),
    url: '/admin/crm',
    icon: {
      position: 'left',
      type: 'user'
    },
  },
  
  {
    title: Translate.t1('User & Organization'),
    url: '/admin/management',
    icon: {
      position: 'left',
      type: 'user'
    },
    subMenu: [
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("Organization"),
        url: '/admin/management/org'
      },
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("User"),
        url: '/admin/management/user'
      },
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("Roles"),
        url: '/admin/management/role'
      },
      {
        icon: {
          position: 'left',
          type: 'user'
        },
        title: Translate.t1("Role Group"),
        url: '/admin/management/role-group'
      }
    ]
  }
]
