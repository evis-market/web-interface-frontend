<template>
  <div class="q-pa-md">
    <q-table
      :rows="products"
      :columns="columns"
      row-key="id"
      bordered
      hide-pagination
      :pagination="{page: 0, rowsPerPage: 0}"
    >
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
  </div>
</template>

<script>
export default {
  name: 'SellerProductsList',
  async mounted() {
    const response = await this.$svc.seller_products.getSellerProducts();
    if (this.processError(response)) {
      return;
    }
    this.products = response['seller-products'].map((product) => ({
      id: product.id,
      name: product.name,
      price: 0,
      rating: 0,
      reviews: '0',
    }));
    console.log({ response });
  },
  data() {
    return {
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
};
</script>
