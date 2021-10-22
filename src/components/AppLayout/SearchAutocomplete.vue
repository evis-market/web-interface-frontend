<template>
  <q-input
    dense
    class="super-small full-width"
    v-model.trim="productName"
    @keyup.enter="searchProduct"
    debounce="500"
    outlined
    placeholder="Search"
  >
    <template v-slot:append>
      <q-icon name="search" class="cursor-pointer" @click="searchProduct" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchAutocomplete',
  data() {
    return {
      productName: '',
    };
  },
  methods: {
    async searchProduct() {
      const targetRouteName = 'productsList';
      if (this.$router.currentRoute.value.name !== targetRouteName) {
        this.$router.push({ name: targetRouteName, params: { productName: this.productName } });
        return;
      }
      const response = await this.$svc.shop.listCategoryProducts({
        offset: 0,
        limit: 20,
        orderBy: 'name',
        productName: this.productName,
      });
      if (this.processError(response)) {
        return;
      }
      this.$store.commit('common/setVisibleProducts', response.seller_products);
    },
  },
});
</script>
