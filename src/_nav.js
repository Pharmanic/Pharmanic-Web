export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Hospital By RDHS',
    ///  url: '/ministry_stores',
      icon: 'icon-list',
      children: [
        {
          name: 'Current Stock',
          url: '/rhcstock',
         // icon: 'icon-list',
        },
        {
          name: 'Return Cart',
          url: '/returncart',
         // icon: 'icon-list',
        },
        {
          name: 'Order Cart',
          url: '/rhordercart',
         // icon: 'icon-list',
        },
        {
          name: 'Issue Drugs',
          url: '/rhissue',
         // icon: 'icon-list',
        }, 

      ],
    },
    {
      title: true,
      name: 'Ministry',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },

     {
      name: 'Ministry Stores',
      url: '/ministry_stores',
      icon: 'icon-home',
      children: [
        {
          name: 'Register Ministry Store',
          url: '/ministry_stores/register',
          icon: 'icon-plus',
        },
        {
          name: 'Ministry Stores',
          url: '/ministry_stores/ministry_stores_list',
          icon: 'icon-list',
        },

      ],
    },
    {
      name: 'RDHS',
      url: '/rdhs',
      icon: 'icon-home',
      children: [
        {
          name: 'Register RDHS',
          url: '/rdhs/register',
          icon: 'icon-plus',
        },
        {
          name: 'RDHS List',
          url: '/rdhs/rdhs_list',
          icon: 'icon-list',
        },

      ],
    },
    {
      name: 'Hospital by RDHS',
      url: '/hospital_by_rdhs',
      icon: 'icon-home',
      children: [
        {
          name: 'Register RDHSHospital',
          url: '/hospital_by_rdhs/register',
          icon: 'icon-plus',
        },
        {
          name: 'RDHS Hospital List',
          url: '/hospital_by_rdhs/hospital_by_rdhs_list',
          icon: 'icon-list',
        },

      ],
    },
    {
      name: 'Direct Hospital',
      url: '/direct_hospitals',
      icon: 'icon-home',
      children: [
        {
          name: 'Register Direct Hospitals',
          url: '/direct_hospitals/register',
          icon: 'icon-plus',
        },
        {
          name: 'Direct Hospitals',
          url: '/direct_hospitals/direct_hospitals',
          icon: 'icon-list',
        },

      ],
    },

    {
      name: 'Users',
      url: '/user',
      icon: 'icon-home',
      children: [
        {
          name: 'Register User',
          url: '/user/register',
          icon: 'icon-plus',
        },
        {
          name: 'Users',
          url: '/user/user_list',
          icon: 'icon-list',
        },

      ],
    },
    {
      name: 'Notifications',
      url: '/notification',
      icon: 'icon-bell',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    
    {
      name: 'WareHouse',
      url: '/ministry/store',
      icon: 'icon-home',
    },
    {
      name: 'Rdhs',
      url: '/ministry/rdhs',
      icon: 'icon-home',
    },
    {
      name: 'DirectHospital',
      url: '/ministry/directhospital',
      icon: 'icon-home',
    },
    {
      name: 'Medicine',
      url: '/ministry/medicine',
      icon: 'icon-drop',
    },
    {
      name: 'Vehicle',
      url: '/ministry/vehicle',
      icon: 'icon-speedometer',
    },
    {
      name: 'Driver',
      url: '/ministry/driver',
      icon: 'icon-user',
    },
    {
      title: true,
      name: 'Ministry Store',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
 
          name: 'Imported Stocks',
          url: '/importstock',
          icon: 'icon-layers',

    },
    {
          name: 'Current Stocks',
          url: '/currentstock',
          icon: 'icon-layers',
    },
    {
          name: 'Returned Stocks',
          url: '/damagestock',
          icon: 'icon-layers',
    },
    
    {
      title: true,
      name: 'Order Requests',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'DH Hospital',
      url: '/ministry/directhospitalreqorder',
      icon: 'icon-bell',
    },
    {
      name: 'RDHS',
      url: '/ministry/rdhsreqorder',
      icon: 'icon-bell',
    },
    // {
    //   title: true,
    //   name: 'Pending Orders',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'LM Hospital',
    //   url: '/ministry/dhpendingorder',
    //   icon: 'icon-bell',
    // },
    // {
    //   name: 'RDHS',
    //   url: '/ministry/rdhsreqorder',
    //   icon: 'icon-bell',
    // },
    
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'Colors',
    //   url: '/theme/colors',
    //   icon: 'icon-drop',
    // },
    // {
    //   name: 'Typography',
    //   url: '/theme/typography',
    //   icon: 'icon-pencil',
    // },
    
    // {
    //   title: true,
    //   name: 'Components',
    //   wrapper: {
    //     element: '',
    //     attributes: {},
    //   },
    // },
    // {
    //   name: 'Base',
    //   url: '/base',
    //   icon: 'icon-puzzle',
    //   children: [
    //     {
    //       name: 'Breadcrumbs',
    //       url: '/base/breadcrumbs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Cards',
    //       url: '/base/cards',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Carousels',
    //       url: '/base/carousels',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Collapses',
    //       url: '/base/collapses',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Dropdowns',
    //       url: '/base/dropdowns',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Forms',
    //       url: '/base/forms',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Jumbotrons',
    //       url: '/base/jumbotrons',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'List groups',
    //       url: '/base/list-groups',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Navs',
    //       url: '/base/navs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Paginations',
    //       url: '/base/paginations',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Popovers',
    //       url: '/base/popovers',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Progress Bar',
    //       url: '/base/progress-bar',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Switches',
    //       url: '/base/switches',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tables',
    //       url: '/base/tables',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tabs',
    //       url: '/base/tabs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tooltips',
    //       url: '/base/tooltips',
    //       icon: 'icon-puzzle',
    //     },
    //   ],
    // },
    // {
    //   name: 'Buttons',
    //   url: '/buttons',
    //   icon: 'icon-cursor',
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/buttons/buttons',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button dropdowns',
    //       url: '/buttons/button-dropdowns',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button groups',
    //       url: '/buttons/button-groups',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Brand Buttons',
    //       url: '/buttons/brand-buttons',
    //       icon: 'icon-cursor',
    //     },
    //   ],
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   icon: 'icon-pie-chart',
    // },
    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'CoreUI Icons',
    //       url: '/icons/coreui-icons',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'info',
    //         text: 'NEW',
    //       },
    //     },
    //     {
    //       name: 'Flags',
    //       url: '/icons/flags',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7',
    //       },
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell',
    //     },
    //   ],
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   divider: true,
    // },
    // {
    //   title: true,
    //   name: 'Extras',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Disabled',
    //   url: '/dashboard',
    //   icon: 'icon-ban',
    //   attributes: { disabled: true },
    // },
    // {
    //   name: 'Download CoreUI',
    //   url: 'https://coreui.io/react/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'https://coreui.io/pro/react/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
  ],
};
