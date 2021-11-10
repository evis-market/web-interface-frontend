<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu />
      <SellerTabs tab="productsAdd"/>
      <div class="full-width row justify-center">
        <q-card class="col-lg-9 col-md-10 col-xs-12">
          <q-card-section>
            <SellerProductForm />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import SellerTabs from 'components/Seller/SellerTabs';
import SellerProductForm from 'components/Seller/SellerProductForm';

export default {
  name: 'PageSellerProductsAdd',
  components: {
    TabMenu,
    SellerTabs,
    SellerProductForm,
  },
};
</script>
