<template>
  <q-layout view="hHh Lpr lFf" class="q-pa-md">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar class="row">
        <router-link :to="{ 'name': 'index' }" class="col-1">
          <img src="~/assets/evis-logo.png" width="35" alt="EVIS" />
        </router-link>
        <q-space></q-space>
        <div class="col-auto">
          <CategoriesDropdown/>
        </div>
        <div class="col-4">
          <SearchAutocomplete/>
        </div>
        <q-space></q-space>
        <div class="col-auto q-ml-xl">
            <q-btn label="Sell data" color="indigo-3" class="q-mr-sm" :to="{ 'name': 'sellerProductsList' }"/>
            <q-btn label="Request custom data" color="secondary" class="q-mr-sm" />
            <q-btn label="Login" color="primary" :to="{ name: 'login' }" />
        </div>
      </q-toolbar>
    </q-header>
    <div v-if="showLeftSidebar">
      <q-drawer show-if-above side="left">
        <ProductsSidebar />
      </q-drawer>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import CategoriesDropdown from 'components/AppLayout/CategoriesDropdown';
import SearchAutocomplete from 'components/AppLayout/SearchAutocomplete';
import ProductsSidebar from 'components/Product/ProductsSidebar';

export default defineComponent({
  name: 'AppLayout',
  components: {
    CategoriesDropdown,
    SearchAutocomplete,
    ProductsSidebar,
  },
  computed: {
    showLeftSidebar() {
      return this.$route.name?.includes('productsList');
    },
  },
});
</script>
