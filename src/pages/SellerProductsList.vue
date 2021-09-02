<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <SellerTabs tab="productsList"/>
      <SellerProductsList/>
    </div>
  </div>
</template>

<script>
import TabMenu from '../components/AppLayout/TabMenu';
import SellerTabs from '../components/Seller/SellerTabs';
import SellerProductsList from '../components/Seller/SellerProductsList';

export default {
  name: 'PageSellerProductsList',
  data() {
    return {
    };
  },
  components: {
    TabMenu,
    SellerTabs,
    SellerProductsList,
  },
};
</script>
