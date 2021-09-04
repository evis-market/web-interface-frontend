<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="buyer"/>
      <BuyerTabs tab="productsList"/>
      <BuyerProductsList/>
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import BuyerTabs from 'components/Buyer/BuyerTabs';
import BuyerProductsList from 'components/Buyer/BuyerProductsList';

export default {
  name: 'PageBuyerProductsList',
  data() {
    return {
    };
  },
  components: {
    TabMenu,
    BuyerTabs,
    BuyerProductsList,
  },
};
</script>
