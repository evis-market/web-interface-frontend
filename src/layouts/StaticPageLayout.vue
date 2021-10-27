<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-md">
    <q-header elevated class="header bg-info text-primary row items-center justify-center">
      <q-toolbar class="header__toolbar">
        <router-link :to="{ 'name': 'index' }">
          <img src="~/assets/evis-logo.svg" width="144" alt="EVIS" />
        </router-link>
        <nav class="header__nav q-ml-xl">
          <a href="#" class="text-subhead-2-medium">White paper</a>
          <a href="#tokenomics" class="text-subhead-2-medium">Tokenomics</a>
          <a href="#solutions" class="text-subhead-2-medium">Solutions</a>
          <a href="#teams" class="text-subhead-2-medium">Teams</a>
          <a href="#faq" class="text-subhead-2-medium">FAQ</a>
        </nav>
        <q-space></q-space>
        <q-btn
          outline
          no-caps
          label="Login"
          color="accent"
          :to="{ name: 'login' }"
          class="text-subhead-2-medium"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StaticPageLayout',

  components: {
  },

  setup() {
  },
});
</script>

<style lang="scss" scoped>
  .header {
    min-height: 128px;
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
</style>
