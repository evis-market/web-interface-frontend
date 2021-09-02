<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-md">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <router-link :to="{ 'name': 'index' }">
          <img src="~/assets/evis-logo.png" width="35" alt="EVIS" />
        </router-link>
        <q-space></q-space>
          <CategoriesDropdown/>
          <SearchAutocomplete/>
        <q-space></q-space>
        <q-btn label="Sell data" color="indigo-3" class="q-mr-sm" :to="{ 'name': 'sellerProductsList' }"/>
        <q-btn label="Request custom data" color="secondary" class="q-mr-sm" />
        <q-btn label="Login" color="primary" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import CategoriesDropdown from 'components/AppLayout/CategoriesDropdown';
import SearchAutocomplete from 'components/AppLayout/SearchAutocomplete';

export default defineComponent({
  name: 'AppLayout',

  components: {
    CategoriesDropdown,
    SearchAutocomplete,
  },

  setup() {
  },
});
</script>
