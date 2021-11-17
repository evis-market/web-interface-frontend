<template>
  <div class="q-pa-md">
    <q-table
      :rows="products"
      :columns="columns"
      row-key="id"
      bordered
      hide-pagination
      :pagination="{page: 0, rowsPerPage: 0}"
      @row-click="onRowClick"
    >
      <template v-slot:no-data>
        No products added, please add products
      </template>
      <template v-slot:body-cell-rating="props">
        <q-td :props="props">
          <q-rating
            size="2em"
            color="orange"
            readonly
            :model-value="props.row.rating"
          />
        </q-td>
      </template>
    </q-table>

    <q-dialog
      v-model="openProductDialog"
      full-height
    >
      <q-card style="width: 1000px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">You can edit this product</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <SellerProductForm :product-id="openedProductID" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import getProductPrice from 'src/composables/productPrice';
import SellerProductForm from './SellerProductForm';

export default {
  name: 'SellerProductsList',
  async mounted() {
    const response = await this.$svc.seller_products.getSellerProducts();
    if (this.processError(response)) {
      return;
    }
    this.products = response['seller-products'].map((product) => {
      let { productPrice } = getProductPrice(product);
      productPrice = productPrice.value.replace('Pricing available upon request', 'by request');
      return {
        id: product.id,
        name: product.name,
        price: productPrice,
        rating: product.rating || 0,
        reviews: '0',
      };
    });
  },
  data() {
    return {
      openProductDialog: false,
      openedProductID: null,
      products: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Data Set',
          align: 'left',
          field: (row) => row.name,
          sortable: true,
        },
        {
          name: 'price',
          required: true,
          label: 'Price',
          align: 'center',
          field: (row) => row.price,
          sortable: true,
        },
        {
          name: 'rating',
          required: true,
          label: 'Rating',
          align: 'center',
          field: (row) => row.rating,
          sortable: true,
        },
        {
          name: 'reviews',
          required: true,
          label: 'Reviews',
          align: 'center',
          field: (row) => row.reviews,
          sortable: true,
        },
      ],
    };
  },
  methods: {
    onRowClick(event, row) {
      this.openProductDialog = true;
      this.openedProductID = row.id;
    }
  },
  components: { SellerProductForm }
};
</script>
