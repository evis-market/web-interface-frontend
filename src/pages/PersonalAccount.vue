<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          class="bg-purple text-white shadow-2"
          align="justify"
        >
          <q-tab name="buyer" label="Buyer" />
          <q-tab name="seller" label="Seller" />
          <q-tab name="governance" label="Governance" />
        </q-tabs>

        <q-separator />

        <div class="q-pa-md">
          <div class="q-gutter-y-md">
            <q-tabs
              v-model="action"
              inline-label
              class="bg-yellow shadow-2"
              align="justify"
            >
              <q-tab name="show_products" label="My Products" icon="work" />
              <q-tab name="add_product" label="Add Product" icon="create_new_folder" />
              <q-tab name="settings" label="Settings" icon="settings" />
              <q-tab name="how_to" label="How To Sell Data" icon="trending_up" />
            </q-tabs>
          </div>
        </div>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="buyer">
            <div class="text-h6">Buyer</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="seller">
            <div class="text-h6">Seller</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="governance">
            <div class="text-h6">Governance</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalAccount',
  data() {
    return {
      tab: 'seller',
      action: 'show_products',
    };
  },
};
</script>

<style scoped>

</style>
