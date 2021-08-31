<template>
  <q-page class="text-center">
    <h1 class="text-primary">EVIS Data Marketplace</h1>
    <img
      alt="EVIS Data MarketPlace"
      src="~assets/apple-touch-icon.png"
      style="width: 180px; height: 180px"
    />
    <br/>
    <q-btn label="Buy data" color="primary" :to="{ name: 'categoriesList' }"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>
