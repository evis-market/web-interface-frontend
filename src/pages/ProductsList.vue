<template>
  <div v-for="product in products" :key="product.id" class="col-9">
    <ProductPreview :product="product" />
  </div>
</template>

<script>
import ProductPreview from 'components/Product/ProductPreview';

export default {
  name: 'ProductsList',
  components: { ProductPreview },
  computed: {
    products() {
      return this.$store.getters['common/visibleProducts'];
    },
  },
  async mounted() {
    const { categoryID, productName } = this.$route.params;
    const data = {
      offset: 0,
      limit: 20,
      orderBy: 'name',
    };
    if (categoryID) {
      data.categoryIDs = categoryID;
    }
    if (productName) {
      data.productName = productName;
    }
    const response = await this.$svc.shop.listCategoryProducts(data);
    if (this.processError(response)) {
      return;
    }
    this.$store.commit('common/setVisibleProducts', response.seller_products);
  },
};
</script>

<style scoped>

</style>
