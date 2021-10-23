<template>
  <q-card class="product-preview q-mb-lg cursor-pointer" flat bordered @click="openProduct">
    <q-card-section horizontal>
      <q-card-section class="left-section col-2 column">
        <q-icon name="polymer" size="xl" color="primary" class="q-mb-auto" />
        <p class="q-mb-none q-mt-md">Data types:</p>
      </q-card-section>

      <q-card-section class="middle-section col column">
        <div class="q-mb-auto">
          <h5 class="q-ma-none">{{ product.name }}</h5>
          <p>by TovoData</p>
          <article>
            discover: Recent comp sales
            Comp owner name Comp sale
            price Comp bed / bath Owner
            occupied Comp taxes Market
          </article>
        </div>
        <p class="q-mb-none q-mt-md">XLS, XML</p>
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="right-section col column items-center">
        <p>{{ productPrice }}</p>
        <q-btn-group class="column" outline>
          <q-btn color="red" label="Request sample" class="q-mb-md" />
          <q-btn color="purple" label="View product" class="q-mb-auto" />
        </q-btn-group>
        <q-rating
          size="2em"
          color="orange"
          readonly
          :model-value="product.rating || 0"
          class="q-mt-md"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import getProductPrice from 'src/composables/productPrice';
import { toRefs } from 'vue';

export default {
  name: 'ProductPreview',
  props: ['product'],
  setup(props) {
    const { product } = toRefs(props);
    return getProductPrice(product);
  },
  methods: {
    openProduct() {
      this.$router.push({ name: 'product', params: { id: this.product.id } });
    },
  },
};
</script>

<style scoped>
  .right-section {
    min-width: 250px;
    max-width: 250px;
  }
  .product-preview {
    min-width: 600px;
  }
</style>
