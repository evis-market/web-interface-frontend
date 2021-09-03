<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <SellerTabs tab="productsList"/>
      <SellerSalesList/>
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import SellerTabs from 'components/Seller/SellerTabs';
import SellerSalesList from 'components/Seller/SellerSalesList';

export default {
  name: 'PageSellerSalesList',
  data() {
    return {
    };
  },
  components: {
    TabMenu,
    SellerTabs,
    SellerSalesList,
  },
};
</script>
