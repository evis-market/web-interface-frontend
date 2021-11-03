<template>
  <q-layout view="lHh Lpr lFf" class="static-page-layout q-pa-md">
    <Header />
    <q-page-container class="static-page-main">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Logo from 'components/Logo'

export default defineComponent({
  name: 'StaticPageLayout',
  computed: {
    showHamburgerMenu() {
      return this.$q.screen.width < 1041;
    },
  },
  components: { Header, Footer, Logo },
});
</script>

<style lang="scss" scoped>
  .static-page-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .static-page-main {
    flex: 1 0 auto;
    padding-bottom: -128px;
  }
</style>
