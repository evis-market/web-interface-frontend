<template>
  <q-card>
    <q-card-section>
      <div class="row q-mb-lg">
        <div class="col-12 col-sm q-mr-lg">
          <div class="text-h5">{{ product.name }}</div>
          <q-rating
            size="2em"
            color="orange"
            readonly
            :model-value="product.rating"
            class="q-mb-md"
          />
          <p>{{ product.description }}</p>
        </div>
        <div class="seller-card col-4">
          <div class="q-mb-sm text-center">{{ productPrice }}</div>
          <q-card class="q-mb-md">
            <q-card-section class="q-pa-md">
              <div class="row justify-between items-center">
                <q-icon name="polymer" size="xl" color="primary" class="col q-mr-md" />
                <div class="col">
                  <div class="text-h6">{{ product.sellerName }}</div>
                  <div class="text-subtitle2">Real Estate Data To Fuel Your Apps</div>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pa-md">
              <div><span class="q-mr-xs"><q-icon name="done" /></span>Verified Provider</div>
              <div>100% Response Rate</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pa-md">
              <div>tovodata.com</div>
              <div>sales@tovodata.com</div>
              <div>+1 (877) 245-3237</div>
            </q-card-section>
          </q-card>
          <q-btn-group class="column full-width" outline>
            <q-btn color="red" label="Request Data Sample" class="q-mb-md" />
            <q-btn color="green" label="Buy" />
          </q-btn-group>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-sm-4 q-mb-lg">
          <div class="text-h5">Data Types</div>
          <q-chip size="md">Image</q-chip>
          <q-chip size="md">Table</q-chip>
        </div>
        <div class="col-6 col-sm-4 q-mb-lg">
          <div class="text-h5">Languages</div>
          <q-chip size="md">English</q-chip>
          <q-chip size="md">Spanish</q-chip>
        </div>
        <div class="col-6 col-sm-4 q-mb-lg">
          <div class="text-h5">Delivery Methods</div>
          <q-chip size="md">S3</q-chip>
          <q-chip size="md">SFTP</q-chip>
          <q-chip size="md">Email</q-chip>
        </div>
        <div class="col-6 col-sm-4 q-mb-lg">
          <div class="text-h5">Data Formats</div>
          <q-chip size="md">XML</q-chip>
          <q-chip size="md">XLS</q-chip>
          <q-chip size="md">JSON</q-chip>
          <q-chip size="md">SQL</q-chip>
        </div>
        <div class="col-6 col-sm-4 q-mb-lg">
          <div class="text-h5">Geography</div>
          <q-chip size="md">USA</q-chip>
          <q-chip size="md">Mexico</q-chip>
          <q-chip size="md">Canada</q-chip>
        </div>
      </div>
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
import getProductPrice from 'src/composables/productPrice';
import { ref } from 'vue';

export default {
  name: 'Product',
  setup() {
    const product = ref({
      description: '',
      name: '',
      rating: 0,
      sellerName: '',
      price_by_request: false,
      price_per_month: null,
      price_per_one_time: null,
      price_per_usage: false,
      price_per_usage_descr: '',
      price_per_year: null,
    });
    const { productPrice } = getProductPrice(product);
    return { product, productPrice };
  },
  data() {
    return {
      reviewsCount: 3,
      reviewsOpened: false,
    };
  },
  async mounted() {
    const response = await this.$svc.seller_products.getSellerProduct(this.$route.params.id);
    if (this.processError(response)) {
      return;
    }

    this.product.name = response.name;
    this.product.description = response.descr;
    this.product.sellerName = response.seller?.name || '';

    const { productPrice } = getProductPrice(response);
    this.productPrice = productPrice;
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
  .seller-card {
    max-width: 300px;
    min-width: 300px;
  }
</style>
