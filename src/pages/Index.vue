<template>
  <q-page class="index-page text-center">
    <h1 class="text-primary">EVIS Data Marketplace</h1>
    <q-btn label="Buy data" color="primary" :to="{ name: 'categoriesList' }"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>

<style lang="scss" scoped>
  .index-page {
    min-height: 300px !important;
  }
</style>
