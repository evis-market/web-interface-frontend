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
            <SellerTabs />
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
import SellerTabs from '../components/SellerTabs';

export default {
  name: 'PersonalAccount',
  data() {
    return {
      tab: 'seller',
    };
  },
  components: {
    SellerTabs,
  },
};
</script>

<style scoped>

</style>
