const routes = [
  {
    path: '/',
    component: () => import('layouts/StaticPageLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/categories/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', name: 'categoriesList', component: () => import('pages/CategoriesList.vue') },
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
