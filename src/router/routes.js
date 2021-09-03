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
    path: '/my/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: 'seller/sales/', name: 'sellerSalesList', component: () => import('pages/SellerSalesList.vue') },
      { path: 'seller/products/', name: 'sellerProductsList', component: () => import('pages/SellerProductsList.vue') },
      { path: 'seller/products/add', name: 'sellerProductsAdd', component: () => import('pages/SellerProductsAdd.vue') },
      { path: 'seller/settings', name: 'sellerSettings', component: () => import('pages/SellerSettings.vue') },
      { path: 'seller/how_to_sell_data', name: 'sellerHowToSellData', component: () => import('pages/SellerHowToSellData.vue') },
      { path: 'buyer/products/', name: 'buyerProductsList', component: () => import('pages/BuyerProductsList.vue') },
      { path: 'buyer/settings', name: 'buyerSettings', component: () => import('pages/BuyerSettings.vue') },
      { path: 'buyer/how_to_buy_data', name: 'buyerHowToBuyData', component: () => import('pages/BuyerHowToBuyData.vue') },
      { path: 'governance/', name: 'governance', component: () => import('pages/Governance.vue') },
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
