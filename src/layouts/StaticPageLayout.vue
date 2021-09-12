<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-md">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <router-link :to="{ 'name': 'index' }">
          <img src="~/assets/evis-logo.png" width="35" alt="EVIS" />
        </router-link>
        <q-space ></q-space>
        <nav>
          <a href="#">White paper</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#solutions">Solutions</a>
          <a href="#teams">Teams</a>
          <a href="#faq">FAQ</a>
        </nav>
        <q-space></q-space>
        <q-btn label="Login" color="primary" :to="{ name: 'login' }" />
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

<style lang="sass" scoped>
nav a
  padding: 1em
</style>
