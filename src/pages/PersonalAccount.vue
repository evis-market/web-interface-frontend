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

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="buyer">
            <div class="text-h6">Buyer</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="seller">
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
                <q-separator />
                <q-tab-panels v-model="action" animated>
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
import SellerProductsList from '../components/SellerProductsList';

export default {
  name: 'PersonalAccount',
  data() {
    return {
      tab: 'seller',
      action: 'show_products',
    };
  },
  components: {
    SellerProductsList,
  },
};
</script>

<style scoped>

</style>
