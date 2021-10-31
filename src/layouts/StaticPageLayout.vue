<template>
  <q-layout view="lHh Lpr lFf" class="static-page-layout q-pa-md">
    <q-header elevated class="static-page-header bg-info text-primary row items-center justify-center q-pl-md q-pr-md">
      <q-toolbar class="static-page-header__toolbar">
        <router-link :to="{ 'name': 'index' }">
          <Logo />
        </router-link>
        <q-btn flat round icon="menu" v-if="showHamburgerMenu" class="q-ml-md" size="23px">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>White paper</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Tokenomics</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Solutions</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Teams</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>FAQ</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-btn>
        <nav class="static-page-header__nav q-ml-xl" v-else>
          <a href="#" class="text-subhead-2-medium">White paper</a>
          <a href="#tokenomics" class="text-subhead-2-medium">Tokenomics</a>
          <a href="#solutions" class="text-subhead-2-medium">Solutions</a>
          <a href="#teams" class="text-subhead-2-medium">Teams</a>
          <a href="#faq" class="text-subhead-2-medium">FAQ</a>
        </nav>
        <q-space></q-space>
        <q-btn
          flat
          no-caps
          label="Sign in"
          color="accent"
          :to="{ name: 'login' }"
          class="text-subhead-2-medium q-mr-sm"
        />
        <q-btn
          flat
          no-caps
          label="Sign up"
          color="accent"
          :to="{ name: 'signup' }"
          class="text-subhead-2-medium ev-border radius-8"
        />
      </q-toolbar>
    </q-header>
    <q-page-container class="static-page-main">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import Footer from 'components/Footer';
import Logo from 'components/Logo'

export default defineComponent({
  name: 'StaticPageLayout',
  computed: {
    showHamburgerMenu() {
      return this.$q.screen.width < 1041;
    },
  },
  components: { Footer, Logo },
});
</script>

<style lang="scss" scoped>
  .static-page-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .static-page-header {
    min-height: 128px;
    flex-shrink: 0;
    &__toolbar {
      max-width: 1270px;
    }
    &__nav a {
      padding: 1em;
      text-decoration: none;
      &:hover {
        color: $accent;
      }
    }
  }
  .static-page-main {
    flex: 1 0 auto;
    padding-bottom: -128px;
  }
</style>
