<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-tabs
        v-model="tab"
        inline-label
        class="bg-yellow shadow-2"
        align="justify"
      >
        <q-tab name="show_products" label="My Products" icon="work" />
        <q-tab name="add_product" label="Add Product" icon="create_new_folder" />
        <q-tab name="settings" label="Settings" icon="settings" />
        <q-tab name="how_to" label="How To Sell Data" icon="trending_up" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="show_products">
          <SellerProductsList />
        </q-tab-panel>

        <q-tab-panel name="add_product">
        </q-tab-panel>

        <q-tab-panel name="settings">
        </q-tab-panel>

        <q-tab-panel name="how_to">
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import SellerProductsList from './SellerProductsList';

export default {
  name: 'SellerTabs',
  data() {
    return {
      tab: 'show_products',
    };
  },
  components: {
    SellerProductsList,
  },
};
</script>

<style scoped>

</style>
