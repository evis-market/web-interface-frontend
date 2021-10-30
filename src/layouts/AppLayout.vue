<template>
  <q-layout view="hHh Lpr lFf" class="q-pa-md">
    <q-header class="header bg-white text-primary row items-center justify-center q-pl-md q-pr-md">
      <q-toolbar class="header__toolbar row">
        <router-link :to="{ 'name': 'index' }" class="col-auto">
          <img src="~/assets/evis-logo.svg" width="144" alt="EVIS" />
        </router-link>
        <q-space></q-space>
        <div class="col-auto q-ml-xl">
          <CategoriesDropdown/>
        </div>
        <div class="col-4">
          <SearchAutocomplete/>
        </div>
        <q-space></q-space>
        <div class="col-auto col-xl-12 q-ml-xl">
          <q-btn
            flat
            no-caps
            label="Request data"
            color="accent"
            class="q-mr-sm text-subhead-2-medium radius-8"
          />
          <q-btn
            flat
            no-caps
            label="Sell data"
            color="accent"
            class="q-mr-sm text-subhead-2-medium radius-8"
            :to="{ 'name': 'sellerProductsList' }"
          />
          <q-btn
            flat
            no-caps
            label="Login"
            color="accent"
            :to="{ name: 'login' }" class="text-subhead-2-medium radius-8 ev-border"
          />
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

<style lang="scss" scoped>
  .header {
    min-height: 128px;
    &__toolbar {
      max-width: 1270px;
    }
  }
</style>
