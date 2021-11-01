<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="id"
      bordered
      hide-pagination
      :pagination="{page: 0, rowsPerPage: 0}"
    >
      <template v-slot:no-data>
        A list of your sales will be displayed here
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
  </div>
</template>

<script>
export default {
  name: 'SellerSalesList',
  data() {
    return {
      /*
      rows: [
        {
          id: 1,
          data_set: 'Global Forex Data Finage Real-Time & Historical Forex Market Feeds',
          price: '$599 / month',
          rating: 5,
          reviews: '273 (2)',
        },
        {
          id: 2,
          data_set: 'Intrinio US Market Data - Real-Time Snap and Streaming Equity Prices',
          price: 'by request',
          rating: 4,
          reviews: '12',
        },
        {
          id: 3,
          data_set: 'BDEX In-Market Automotive Consumers Data⎢USA⎢Real-time Datasets',
          price: '$2000 / year',
          rating: 4,
          reviews: '14 (1)',
        },
        {
          id: 4,
          data_set: 'Global Forex Data Finage Real-Time & Historical Forex Market Feeds',
          price: '$599 / month',
          rating: 5,
          reviews: '273 (2)',
        },
        {
          id: 5,
          data_set: 'Intrinio US Market Data - Real-Time Snap and Streaming Equity Prices',
          price: 'by request',
          rating: 4,
          reviews: '12',
        },
        {
          id: 6,
          data_set: 'BDEX In-Market Automotive Consumers Data⎢USA⎢Real-time Datasets',
          price: '$2000 / year',
          rating: 4,
          reviews: '14 (1)',
        },
        {
          id: 7,
          data_set: 'Global Forex Data Finage Real-Time & Historical Forex Market Feeds',
          price: '$599 / month',
          rating: 5,
          reviews: '273 (2)',
        },
        {
          id: 8,
          data_set: 'Intrinio US Market Data - Real-Time Snap and Streaming Equity Prices',
          price: 'by request',
          rating: 4,
          reviews: '12',
        },
      ],*/
      columns: [
        {
          name: 'date',
          required: true,
          label: 'Date',
          align: 'center',
          field: (row) => row.created_at,
          sortable: true,
        },
        {
          name: 'data_set',
          required: true,
          label: 'Data Set',
          align: 'left',
          field: (row) => row.data_set,
          sortable: true,
        },
        {
          name: 'price',
          required: true,
          label: 'Price',
          align: 'center',
          field: (row) => row.price,
          sortable: true,
        } /*,
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
        }, */
      ],
    };
  },
};
</script>
