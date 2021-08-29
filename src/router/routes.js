const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'main',
        path: '',
        component: () => import('pages/Index.vue'),
      },

      {
        name: 'whitePaper',
        path: 'white-paper',
        component: () => import('pages/info/WhitePaper.vue'),
      },
      {
        name: 'tokenomics',
        path: 'tokenomics',
        component: () => import('pages/info/Tokenomics.vue'),
      },
      {
        name: 'solutions',
        path: 'solutions',
        component: () => import('pages/info/Solutions.vue'),
      },
      {
        name: 'teams',
        path: 'teams',
        component: () => import('pages/info/Teams.vue'),
      },
      {
        name: 'faq',
        path: 'faq',
        component: () => import('pages/info/FAQ.vue'),
      },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
