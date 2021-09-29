<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  async mounted() {
    const response = await this.$svc.shop.getAllOptions();
    if (this.processError(response)) {
      return;
    }
    this.$store.commit('common/saveAllOptions', response);
  },
});
</script>
