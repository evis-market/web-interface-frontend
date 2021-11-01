<template>
  <q-tabs
    :v-model="tab"
    inline-label
    class="bg-white shadow-0"
    align="center"
  >
    <q-route-tab name="salesList" label="My Sales" icon="receipt" :to="{ 'name': 'sellerSalesList' }" />
    <q-route-tab name="productsList" label="My Products" icon="work" :to="{ 'name': 'sellerProductsList' }" />
    <q-route-tab name="productsAdd" label="Add Product" icon="create_new_folder" :to="{ 'name': 'sellerProductsAdd' }" />
    <q-route-tab name="settings" label="Settings" icon="settings" :to="{ 'name': 'sellerSettings' }" />
    <!-- <q-route-tab name="howToSellData" label="How To Sell Data" icon="trending_up" :to="{ 'name': 'sellerHowToSellData' }" /> -->
  </q-tabs>
</template>

<script>
export default {
  name: 'SellerTabs',
  props: {
    tab: String,
  },
};
</script>
