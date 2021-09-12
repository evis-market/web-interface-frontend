<template>
  <q-tabs
    :v-model="tab"
    class="bg-white text-primary shadow-0"
    align="center"
  >
    <q-route-tab
      name="buyer"
      label="Buyer"
      :to="{ 'name': 'buyerProductsList' }"
      :class="{ 'q-tab--active': isBuyerTabActive }"
    />
    <q-route-tab
      name="seller"
      label="Seller"
      :to="{ 'name': 'sellerProductsList' }"
      :class="{ 'q-tab--active': isSellerTabActive }"
    />
    <q-route-tab
      name="governance"
      label="Governance"
      :to="{ 'name': 'governance' }"
      :class="{ 'q-tab--active': isGovernanceTabActive }"
    />
  </q-tabs>
</template>

<script>
export default {
  name: 'MyTabMenu',
  computed: {
    isBuyerTabActive() {
      return this.$route.path.includes('/my/buyer/');
    },
    isSellerTabActive() {
      return this.$route.path.includes('/my/seller/');
    },
    isGovernanceTabActive() {
      return this.$route.path.includes('/my/governance/');
    },
  },
  props: {
    tab: String,
  },
};
</script>
