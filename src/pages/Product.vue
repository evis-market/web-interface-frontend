<template>
  <q-card>
    <q-card-section>
      <div class="text-h5 q-mb-sm">Reviews</div>
      <div class="row items-center q-mb-md" v-for="i in reviewsCount" :key="i">
        <div class="col">
          <div class="text-bold">David S.</div>
          <div>Nice data, fast response! Will order more.</div>
        </div>
        <p class="col-auto">13.08.21</p>
        <q-rating
          size="2em"
          color="orange"
          readonly
          :model-value="0"
          class="col-auto q-mb-md q-mr-md q-ml-md"
        />
      </div>
      <q-btn color="blue" :label="reviewsButtonText" @click="manageReviews"></q-btn>
      <q-separator spaced="xl" color="white" />
      <div class="text-h5 q-mb-sm">Related Products</div>
      <ProductPreview :product="{ name: 'Some product', id: 100 }"/>
      <ProductPreview :product="{ name: 'Related product', id: 101 }" />
    </q-card-section>
  </q-card>
</template>

<script>
import ProductPreview from 'components/Product/ProductPreview';

export default {
  name: 'Product',
  data() {
    return {
      reviewsCount: 3,
      reviewsOpened: false,
    };
  },
  computed: {
    reviewsButtonText() {
      return (this.reviewsCount < 4) ? 'All reviews' : 'Hide';
    },
  },
  methods: {
    manageReviews() {
      if (this.reviewsCount < 4) {
        this.reviewsCount *= 3;
      } else {
        this.reviewsCount = 3;
      }
    },
  },
  components: { ProductPreview },
};
</script>

<style scoped>

</style>
