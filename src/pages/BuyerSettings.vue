<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <BuyerTabs tab="settings"/>
      [SAVE SETTINGS FORM]
    </div>
  </div>
</template>

<script>
import TabMenu from '../components/AppLayout/TabMenu';
import BuyerTabs from '../components/Buyer/BuyerTabs';

export default {
  name: 'PageBuyerSettings',
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
