<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <BuyerTabs tab="howToSellData"/>
      [HOW TO BUY DATA STATIC HTML]
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import BuyerTabs from 'components/Buyer/BuyerTabs';

export default {
  name: 'PageBuyerHowToBuyData',
  data() {
    return {
    };
  },
  components: {
    TabMenu,
    BuyerTabs,
  },
};
</script>
