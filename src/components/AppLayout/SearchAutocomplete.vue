<template>
  <q-input
    class="search-block text-caption-1"
    v-model="search"
    debounce="500"
    outlined
    placeholder="Search"
    color="primary"
    label-color="dark"
  >
    <template v-slot:append>
      <q-btn color="primary" icon="search" text-color="white" class="search-btn" />
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
      this.$router.push({ name: targetRouteName, query: { search: this.productName } });
      if (this.$router.currentRoute.value.name !== targetRouteName) {
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

<style lang="scss">
  .search-block {
    & .q-field__control {
      height: 47px;
      padding: 0;
      padding-left: 10px;
      display: flex;
      align-items: center;
    }
    & .q-field__control {
      border-radius: 8px;
    }
    & .q-field__control:before {
      border: 2px solid $primary;
      box-sizing: border-box;
      border-radius: 8px;
    }
  }
  .search-btn {
    height: 43px;
    margin: 0;
    margin-right: 2px;
    border-radius: 6px;
  }
</style>
