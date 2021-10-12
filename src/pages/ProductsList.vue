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
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const { categoryID = 1 } = this.$route.params;
    const response = await this.$svc.shop.listCategoryProducts({
      categoryIDs: categoryID,
      offset: 0,
      limit: 20,
      orderBy: 'name',
    });
    if (this.processError(response)) {
      return;
    }
    this.products = response.seller_products;
  },
};
</script>

<style scoped>

</style>
