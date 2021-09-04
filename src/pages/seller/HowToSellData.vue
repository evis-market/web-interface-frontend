<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <SellerTabs tab="howToSellData"/>
      [HOW TO SELL DATA STATIC HTML]
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import SellerTabs from 'components/Seller/SellerTabs';

export default {
  name: 'PageSellerHowToSellData',
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
