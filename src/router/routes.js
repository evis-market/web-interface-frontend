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
  {
    path: '/products/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', name: 'productsListAll', component: () => import('pages/ProductsList.vue') },
      { path: ':slug?', name: 'productsList', component: () => import('pages/ProductsList.vue') },
    ],
  },
  {
    path: '/product/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: ':id', name: 'product', component: () => import('pages/Product.vue') },
    ],
  },
  {
    path: '/my/',
    component: () => import('layouts/AppLayout.vue'),
    meta: { loginRequired: true },
    children: [
      { path: 'seller/sales/', name: 'sellerSalesList', component: () => import('pages/seller/SalesList.vue') },
      { path: 'seller/products/', name: 'sellerProductsList', component: () => import('pages/seller/ProductsList.vue') },
      { path: 'seller/products/add', name: 'sellerProductsAdd', component: () => import('pages/seller/ProductsAdd.vue') },
      { path: 'seller/settings', name: 'sellerSettings', component: () => import('pages/seller/Settings.vue') },
      { path: 'seller/how_to_sell_data', name: 'sellerHowToSellData', component: () => import('pages/seller/HowToSellData.vue') },
      { path: 'buyer/products/', name: 'buyerProductsList', component: () => import('pages/buyer/ProductsList.vue') },
      { path: 'buyer/settings', name: 'buyerSettings', component: () => import('pages/buyer/Settings.vue') },
      { path: 'buyer/how_to_buy_data', name: 'buyerHowToBuyData', component: () => import('pages/buyer/HowToBuyData.vue') },
      { path: 'governance/', name: 'governance', component: () => import('pages/Governance.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/user/Login.vue') },
    ],
  },
  {
    path: '/signup',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', name: 'signup', component: () => import('pages/user/Signup.vue') },
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
