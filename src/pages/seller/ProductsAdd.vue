<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu />
      <SellerTabs tab="productsAdd"/>
      <div class="full-width row justify-center">
        <q-card class="col-lg-9 col-md-10 col-xs-12">
          <q-card-section>
            <q-form class="q-pa-md">
              <div class="row">
                <q-icon name="person" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  label="Display Name"
                  v-model="name"
                  class="col"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>
              <div class="row">
                <q-icon name="description" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  label="Description"
                  v-model="description"
                  class="col"
                  :rules="[val => true]"
                />
              </div>
              <div class="row">
                <q-icon name="language" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="selectedDataLanguages"
                  multiple
                  dense
                  :options="dataLanguages"
                  use-chips
                  stack-label
                  label="Data Languages"
                  :rules="[val => true]"
                />
              </div>
              <div class="row">
                <q-icon name="category" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="selectedCategories"
                  multiple
                  dense
                  :options="categories"
                  use-chips
                  stack-label
                  label="Categories"
                  :rules="[val => true]"
                />
              </div>
              <div class="row">
                <q-icon name="place" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="selectedGeography"
                  multiple
                  dense
                  :options="geography"
                  use-chips
                  stack-label
                  label="Geography"
                  :rules="[val => true]"
                />
              </div>
              <div class="row">
                <q-icon name="toc" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="selectedDataTypes"
                  multiple
                  dense
                  :options="dataTypes"
                  use-chips
                  stack-label
                  label="Data Types"
                  :rules="[val => true]"
                />
              </div>
              <div class="row">
                <q-icon name="picture_as_pdf" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="selectedDataFormats"
                  multiple
                  dense
                  :options="dataFormats"
                  use-chips
                  stack-label
                  label="Data Formats"
                  :rules="[val => true]"
                />
              </div>
              <div class="row">
                <q-icon name="sync_alt" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="selectedDeliveryMethods"
                  multiple
                  dense
                  :options="deliveryMethods"
                  use-chips
                  stack-label
                  label="Delivery Methods"
                  :rules="[val => true]"
                />
              </div>
              <div class="row" v-if="dataURLs.length">
                <q-icon name="link" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <div class="col">
                  <div class="row" v-for="(url, idx) in dataURLs" :key="url.deliveryMethod + url.dataFormat">
                    <q-input
                      dense
                      label="Data URL"
                      v-model="dataURLsModel[idx]"
                      class="col"
                      :rules="[val => true]"
                    >
                      <template v-slot:prepend>
                        <q-chip dense>{{ url.deliveryMethod }}</q-chip>
                        <q-chip dense>{{ url.dataFormat }}</q-chip>
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>
              <div class="row">
                <q-icon name="attach_money" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <div class="col">
                  <div class="row" v-for="price in prices" :key="price.type">
                    <q-input
                      dense
                      :label="`Price (${price.type})`"
                      v-model="price.value"
                      class="col"
                      :rules="[val => true]"
                    />
                  </div>
                  <q-checkbox
                    v-model="pricePerUsage"
                    label="Per Usage"
                    class="col"
                    dense
                  />
                  <q-input
                    dense
                    label="Usage Details"
                    v-model="usageDetails"
                    class="col"
                    :rules="[val => true]"
                  />
                  <q-checkbox
                    v-model="pricingUponRequest"
                    label="Pricing available upon request"
                    class="col"
                    dense
                  />
                </div>
              </div>
              <div class="row q-mt-sm">
                <q-icon name="attach_file" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-file
                  dense
                  multiple
                  v-model="dataSamples"
                  label="Data Samples"
                  class="col"
                  :rules="[val => true]"
                />
              </div>
              <div class="row justify-end">
                <q-btn label="Cancel" type="reset" color="primary" flat />
                <q-btn
                  label="Save"
                  type="submit"
                  color="primary"
                  class="q-ml-sm"
                  @click.prevent=""
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import SellerTabs from 'components/Seller/SellerTabs';

export default {
  name: 'PageSellerProductsAdd',
  data() {
    return {
      name: '',
      description: '',
      selectedDataLanguages: ['English'],
      dataLanguages: [
        'English', 'Spanish',
      ],
      selectedCategories: ['Proprietary Market Data'],
      categories: [
        'Proprietary Market Data', 'Hello World',
      ],
      selectedGeography: ['USA', 'Europe'],
      geography: [
        'USA', 'Europe',
      ],
      selectedDataTypes: ['Table'],
      dataTypes: ['Table'],
      selectedDataFormats: ['XLSX', 'XML'],
      dataFormats: ['XLSX', 'XML'],
      selectedDeliveryMethods: ['SFTP', 'S3'],
      deliveryMethods: ['SFTP', 'S3'],
      dataURLsModel: [],
      prices: [
        { type: 'One-Time', value: '' },
        { type: 'Per Month', value: '' },
        { type: 'Per Year', value: '' },
      ],
      dataSamples: [],
      pricingUponRequest: false,
      pricePerUsage: false,
      usageDetails: '',
    };
  },
  mounted() {
    this.createDataURLsModel();
  },
  computed: {
    dataURLs() {
      const dataURLs = [];
      this.selectedDeliveryMethods.forEach((deliveryMethod) => {
        this.selectedDataFormats.forEach((dataFormat) => {
          dataURLs.push({ deliveryMethod, dataFormat, value: '' });
        });
      });
      return dataURLs;
    },
  },
  methods: {
    createDataURLsModel() {
      this.dataURLsModel = this.dataURLs.map(() => '');
    },
  },
  watch: {
    dataURLs() {
      this.createDataURLsModel();
    },
  },
  components: {
    TabMenu,
    SellerTabs,
  },
};
</script>
