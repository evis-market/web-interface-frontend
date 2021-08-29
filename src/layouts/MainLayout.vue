<template>
  <q-layout view="lHr lpr lFr" class="evis-main-layout">
    <Header />
    <!-- * mobile <Sidebar /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './Header.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header,
  },
});
</script>

<style lang="sass" scoped>
.evis-main-layout
  @media (min-width: 960px)
    max-width: 960px
    margin: 0 auto
</style>
