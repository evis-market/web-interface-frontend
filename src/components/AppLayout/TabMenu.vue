<template>
  <q-tabs
    :v-model="tab"
    class="bg-white text-primary shadow-0"
    align="center"
  >
    <q-route-tab name="buyer" label="Buyer" :to="{ 'name': 'buyerProductsList' }" />
    <q-route-tab name="seller" label="Seller" :to="{ 'name': 'sellerProductsList' }" />
    <q-route-tab name="governance" label="Governance" :to="{ 'name': 'governance' }" />
  </q-tabs>
</template>

<script>
export default {
  name: 'MyTabMenu',
  props: {
    tab: String,
  },
};
</script>
