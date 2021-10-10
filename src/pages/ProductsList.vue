<template>
  <div v-for="i in 10" :key="i" class="col-9">
    <ProductPreview />
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
  mounted() {
    const categoryID = this.$route.params.categoryID;
  },
};
</script>

<style scoped>

</style>
