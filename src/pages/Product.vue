<template>
  <q-card>
    <q-card-section>
      <div class="text-h5">Related Products</div>
      <ProductPreview :product="{ name: 'Some product', id: 100 }"/>
      <ProductPreview :product="{ name: 'Related product', id: 101 }" />
    </q-card-section>
  </q-card>
</template>

<script>
import ProductPreview from 'components/Product/ProductPreview';

export default {
  name: 'Product',
  components: { ProductPreview },
};
</script>

<style scoped>

</style>
