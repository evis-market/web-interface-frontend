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
                  :options="dataLanguages.map(lang => lang.name_en)"
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
                  :options="categories.map(category => category.name).sort()"
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
                  :options="geography.filter(geo => !geo.parent_id).map(geo => geo.name)"
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
                  :options="dataTypes.map(dataType => dataType.name)"
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
                  :options="dataFormats.map(format => format.name)"
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
                  :options="deliveryMethods.map(deliveryMethod => deliveryMethod.name)"
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
                      v-model="dataURLsModel[idx].value"
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
                      v-model.number="price.value"
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
                  :disable="disableSaving"
                  @click.prevent="addProduct"
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
      selectedDataLanguages: [],
      selectedCategories: [],
      selectedGeography: [],
      selectedDataTypes: [],
      selectedDataFormats: [],
      selectedDeliveryMethods: [],
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
    disableSaving() {
      if (!this.name || !this.description) return true;
      if (!this.selectedDataLanguages.length) return true;
      if (!this.selectedCategories.length) return true;
      if (!this.selectedGeography.length) return true;
      if (!this.selectedDataTypes.length) return true;
      if (!this.selectedDataFormats.length) return true;
      if (!this.selectedDeliveryMethods.length) return true;
      return !this.name || !this.description;
    },
    dataFormats() {
      return this.$store.state.common.dataFormats;
    },
    geography() {
      return this.$store.state.common.geoRegions;
    },
    dataLanguages() {
      return this.$store.state.common.languages;
    },
    categories() {
      return this.$store.state.common.allCategories;
    },
    dataTypes() {
      return this.$store.state.common.dataTypes;
    },
    deliveryMethods() {
      return this.$store.state.common.dataDeliveryTypes;
    },
    dataURLs() {
      const dataURLs = [];
      this.selectedDeliveryMethods.forEach((deliveryMethod) => {
        const deliveryMethodID = this.deliveryMethods.find((method) => method.name === deliveryMethod).id;
        this.selectedDataFormats.forEach((dataFormat) => {
          const dataFormatID = this.dataFormats.find((format) => format.name === dataFormat).id;
          dataURLs.push({
            deliveryMethod, dataFormat, deliveryMethodID, dataFormatID,
          });
        });
      });
      return dataURLs;
    },
  },
  methods: {
    createDataURLsModel() {
      this.dataURLsModel = this.dataURLs.map((url) => {
        url.value = '';
        return url;
      });
    },
    getArrayOfIDs(computedName, selectedItems, selectedItemsPropertyName = 'name') {
      return this[computedName].filter((item) => selectedItems.includes(item[selectedItemsPropertyName])).map((item) => item.id);
    },
    async addProduct() {
      const response = await this.$svc.seller_products.createSellerProduct({
        name: this.name,
        descr: this.description,
        price_one_time: this.prices.find((price) => price.type === 'One-Time').value,
        price_per_month: this.prices.find((price) => price.type === 'Per Month').value,
        price_per_year: this.prices.find((price) => price.type === 'Per Year').value,
        price_by_request: this.pricingUponRequest,
        price_per_usage: this.pricePerUsage,
        price_per_usage_descr: this.usageDetails,
        data_categories_ids: this.getArrayOfIDs('categories', this.selectedCategories),
        data_langs_ids: this.getArrayOfIDs('dataLanguages', this.selectedDataLanguages, 'name_en'),
        data_geo_regions_ids: this.getArrayOfIDs('geography', this.selectedGeography),
        data_types_ids: this.getArrayOfIDs('dataTypes', this.selectedDataTypes),
        data_formats_ids: this.getArrayOfIDs('dataFormats', this.selectedDataFormats),
        data_delivery_types_ids: this.getArrayOfIDs('deliveryMethods', this.selectedDeliveryMethods),
        data_urls: this.dataURLsModel.map((model) => ({
          data_delivery_type_id: model.deliveryMethodID,
          data_format_id: model.dataFormatID,
          url: model.value,
        })),
        data_sample_urls: [
          'http://domain.com/data_sample1.xls',
          'http://domain.com/data_sample2.xls',
        ],
      });
      if (this.processError(response)) {
        return;
      }
      console.log({ response });
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
