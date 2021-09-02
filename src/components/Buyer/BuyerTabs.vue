<template>
  <q-tabs
    :v-model="tab"
    inline-label
    class="bg-white shadow-0"
    align="center"
  >
    <q-route-tab name="productsList" label="My Products" icon="work" :to="{ 'name': 'buyerProductsList' }" />
    <q-route-tab name="settings" label="Settings" icon="settings" :to="{ 'name': 'buyerSettings' }" />
    <q-route-tab name="howToBuyData" label="How To Buy Data" icon="trending_up" :to="{ 'name': 'buyerHowToBuyData' }" />
  </q-tabs>
</template>

<script>
export default {
  name: 'BuyerTabs',
  props: {
    tab: String,
  },
};
</script>
