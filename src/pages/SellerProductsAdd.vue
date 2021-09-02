<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu />
      <SellerTabs tab="productsAdd"/>
      [ADD PRODUCT FORM]
    </div>
  </div>
</template>

<script>
import TabMenu from '../components/AppLayout/TabMenu';
import SellerTabs from '../components/Seller/SellerTabs';

export default {
  name: 'PageSellerProductsAdd',
  data() {
    return {
    };
  },
  components: {
    TabMenu,
    SellerTabs,
  },
};
</script>
