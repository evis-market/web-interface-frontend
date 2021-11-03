<template>
  <q-layout view="hHh Lpr fff" class="app-layout q-pa-md">
    <Header />
    <div v-if="showLeftSidebar">
      <q-drawer show-if-above side="left">
        <ProductsSidebar />
      </q-drawer>
    </div>
    <q-page-container class="app-main">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import CategoriesDropdown from 'components/AppLayout/CategoriesDropdown';
import SearchAutocomplete from 'components/AppLayout/SearchAutocomplete';
import ProductsSidebar from 'components/Product/ProductsSidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Logo from 'components/Logo'

export default defineComponent({
  name: 'AppLayout',
  components: {
    CategoriesDropdown,
    SearchAutocomplete,
    ProductsSidebar,
    Header,
    Footer,
    Logo,
  },
  computed: {
    showLeftSidebar() {
      return this.$route.name?.includes('productsList');
    },
  },
});
</script>
