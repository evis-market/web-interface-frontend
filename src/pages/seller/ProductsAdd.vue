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
                  v-model="v.name.$model"
                  class="col"
                  :error="v.name.$error"
                  :error-message="v.name.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row">
                <q-icon name="description" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  label="Description"
                  v-model="v.descr.$model"
                  class="col"
                  :error="v.descr.$error"
                  :error-message="v.descr.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row">
                <q-icon name="language" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="v.data_langs_ids.$model"
                  multiple
                  dense
                  :options="dataLanguages.map(lang => lang.name_en)"
                  use-chips
                  stack-label
                  label="Data Languages"
                  :error="v.data_langs_ids.$error"
                  :error-message="v.data_langs_ids.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row">
                <q-icon name="category" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="v.data_categories_ids.$model"
                  multiple
                  dense
                  :options="categories.map(category => category.name).sort()"
                  use-chips
                  stack-label
                  label="Categories"
                  :error="v.data_categories_ids.$error"
                  :error-message="v.data_categories_ids.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row">
                <q-icon name="place" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="v.data_geo_regions_ids.$model"
                  multiple
                  dense
                  :options="geography.filter(geo => !geo.parent_id).map(geo => geo.name)"
                  use-chips
                  stack-label
                  label="Geography"
                  :error="v.data_geo_regions_ids.$error"
                  :error-message="v.data_geo_regions_ids.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row">
                <q-icon name="toc" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="v.data_types_ids.$model"
                  multiple
                  dense
                  :options="dataTypes.map(dataType => dataType.name)"
                  use-chips
                  stack-label
                  label="Data Types"
                  :error="v.data_types_ids.$error"
                  :error-message="v.data_types_ids.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row">
                <q-icon name="picture_as_pdf" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="v.data_formats_ids.$model"
                  multiple
                  dense
                  :options="dataFormats.map(format => format.name)"
                  use-chips
                  stack-label
                  label="Data Formats"
                  :error="v.data_formats_ids.$error"
                  :error-message="v.data_formats_ids.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row">
                <q-icon name="sync_alt" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-select
                  class="col"
                  v-model="v.data_delivery_types_ids.$model"
                  multiple
                  dense
                  :options="deliveryMethods.map(deliveryMethod => deliveryMethod.name)"
                  use-chips
                  stack-label
                  label="Delivery Methods"
                  :error="v.data_delivery_types_ids.$error"
                  :error-message="v.data_delivery_types_ids.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row" v-if="dataURLs.length" :key="dataURLsKey">
                <q-icon name="link" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <div class="col">
                  <ValidateEach
                    v-for="(url, index) in data_urls"
                    :key="index"
                    :state="url"
                    :rules="dataUrlRules"
                  >
                    <template #default="{ v }">
                      <div class="row">
                        <q-input
                          dense
                          label="Data URL"
                          v-model.trim="v.value.$model"
                          class="col"
                          @focus="clearServerSideDataURLErrors(index)"
                          :error="v.value.$error || !!vuelidateExternalResults.data_urls?.[index]?.url"
                          :error-message="dataURLErrorMessage(v.value, index)"
                        >
                          <template v-slot:prepend>
                            <q-chip dense>{{ url.deliveryMethod }}</q-chip>
                            <q-chip dense>{{ url.dataFormat }}</q-chip>
                          </template>
                        </q-input>
                      </div>
                    </template>
                  </ValidateEach>
                </div>
              </div>
              <div class="row">
                <q-icon name="attach_money" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <div class="col">
                  <q-input
                    dense
                    label="Price (One-Time)"
                    class="col"
                    v-model="v.price_one_time.$model"
                    :error="v.price_one_time.$error"
                    :error-message="v.price_one_time.$errors.map(err => err.$message).join('. ')"
                  />
                  <q-input
                    dense
                    label="Price (Per Month)"
                    class="col"
                    v-model="v.price_per_month.$model"
                    :error="v.price_per_month.$error"
                    :error-message="v.price_per_month.$errors.map(err => err.$message).join('. ')"
                  />
                  <q-input
                    dense
                    label="Price (Per Year)"
                    class="col"
                    v-model="v.price_per_year.$model"
                    :error="v.price_per_year.$error"
                    :error-message="v.price_per_year.$errors.map(err => err.$message).join('. ')"
                  />
                  <q-checkbox
                    v-model="price_per_usage"
                    label="Per Usage"
                    class="col"
                    dense
                  />
                  <q-input
                    dense
                    label="Usage Details"
                    v-model="price_per_usage_descr"
                    class="col"
                    :rules="[val => true]"
                  />
                  <q-checkbox
                    v-model="price_by_request"
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
                  v-model="v.data_samples.$model"
                  label="Data Samples"
                  class="col"
                  :error="v.data_samples.$error"
                  :error-message="v.data_samples.$errors.map(err => err.$message).join('. ')"
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
import useVuelidate from '@vuelidate/core';
import { reactive, ref } from 'vue';
import { ValidateEach } from '@vuelidate/components';
import { numeric, url, required } from '@vuelidate/validators';

export default {
  name: 'PageSellerProductsAdd',
  setup() {
    const dataUrlRules = {
      value: { url, required },
    };
    const data_urls = reactive([]);
    const v = useVuelidate();
    return {
      v, dataUrlRules, data_urls,
    };
  },
  data() {
    return {
      dataURLsKey: 0,
      name: '',
      descr: '',
      data_langs_ids: [],
      data_categories_ids: [],
      data_geo_regions_ids: [],
      data_types_ids: [],
      data_formats_ids: [],
      data_delivery_types_ids: [],
      data_samples: [],
      price_one_time: '',
      price_per_month: '',
      price_per_year: '',
      price_by_request: false,
      price_per_usage: false,
      price_per_usage_descr: '',
      vuelidateExternalResults: {
        name: [],
        descr: [],
        data_langs_ids: [],
        data_categories_ids: [],
        data_geo_regions_ids: [],
        data_types_ids: [],
        data_formats_ids: [],
        data_delivery_types_ids: [],
        data_urls: [],
        data_samples: [],
        price_one_time: [],
        price_per_month: [],
        price_per_year: [],
        price_by_request: [],
        price_per_usage: [],
        price_per_usage_descr: [],
      },
    };
  },
  validations: {
    name: { required },
    descr: { required },
    data_langs_ids: { required },
    data_categories_ids: { required },
    data_geo_regions_ids: { required },
    data_types_ids: { required },
    data_formats_ids: { required },
    data_delivery_types_ids: { required },
    data_samples: {},
    price_one_time: { numeric },
    price_per_month: { numeric },
    price_per_year: { numeric },
  },
  computed: {
    disableSaving() {
      if (!this.name || !this.descr) return true;
      if (!this.data_langs_ids.length) return true;
      if (!this.data_categories_ids.length) return true;
      if (!this.data_geo_regions_ids.length) return true;
      if (!this.data_types_ids.length) return true;
      if (!this.data_formats_ids.length) return true;
      if (!this.data_delivery_types_ids.length) return true;
      if (this.data_urls.some((urlObj) => !urlObj.value.value)) return true;
      return !this.name || !this.descr || !!this.v.$errors.length;
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
      return this.$store.state.common.allCategories.filter((category) => category.parent_id !== null);
    },
    dataTypes() {
      return this.$store.state.common.dataTypes;
    },
    deliveryMethods() {
      return this.$store.state.common.dataDeliveryTypes;
    },
    dataURLs() {
      const dataURLs = [];
      this.data_delivery_types_ids.forEach((deliveryMethod) => {
        const deliveryMethodID = this.deliveryMethods.find((method) => method.name === deliveryMethod).id;
        this.data_formats_ids.forEach((dataFormat) => {
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
    dataURLErrorMessage(value, index) {
      const veulidateMessage = value.$errors.map((err) => err.$message).join('. ');
      const serverMessage = this.vuelidateExternalResults.data_urls?.[index]?.url?.join('. ');
      return veulidateMessage || serverMessage;
    },
    clearServerSideDataURLErrors(index) {
      if (this.vuelidateExternalResults.data_urls?.[index]) {
        delete this.vuelidateExternalResults.data_urls?.[index];
      }
    },
    createDataURLsModel() {
      this.data_urls = this.dataURLs.map((url) => {
        url.value = ref('');
        return url;
      });
      this.dataURLsKey += 1;
    },
    getArrayOfIDs(computedName, selectedItems, selectedItemsPropertyName = 'name') {
      return this[computedName].filter((item) => selectedItems.includes(item[selectedItemsPropertyName])).map((item) => item.id);
    },
    clearAllFields() {
      this.name = '';
      this.descr = '';
      this.price_per_usage_descr = '';
      this.data_langs_ids = [];
      this.data_categories_ids = [];
      this.data_geo_regions_ids = [];
      this.data_types_ids = [];
      this.data_formats_ids = [];
      this.data_delivery_types_ids = [];
      this.data_samples = [];
      this.price_one_time = '';
      this.price_per_month = '';
      this.price_per_year = '';
      this.price_by_request = false;
      this.price_per_usage = false;
    },
    async addProduct() {
      const response = await this.$svc.seller_products.createSellerProduct({
        name: this.name,
        descr: this.descr,
        price_one_time: +this.price_one_time,
        price_per_month: +this.price_per_month,
        price_per_year: +this.price_per_year,
        price_by_request: this.price_by_request,
        price_per_usage: this.price_per_usage,
        price_per_usage_descr: this.price_per_usage_descr,
        data_categories_ids: this.getArrayOfIDs('categories', this.data_categories_ids),
        data_langs_ids: this.getArrayOfIDs('dataLanguages', this.data_langs_ids, 'name_en'),
        data_geo_regions_ids: this.getArrayOfIDs('geography', this.data_geo_regions_ids),
        data_types_ids: this.getArrayOfIDs('dataTypes', this.data_types_ids),
        data_formats_ids: this.getArrayOfIDs('dataFormats', this.data_formats_ids),
        data_delivery_types_ids: this.getArrayOfIDs('deliveryMethods', this.data_delivery_types_ids),
        data_urls: this.data_urls.map((model) => ({
          data_delivery_type_id: model.deliveryMethodID,
          data_format_id: model.dataFormatID,
          url: model.value.value,
        })),
        data_samples: [],
      });
      if (this.processErrorWithInvalidFields(response, this.vuelidateExternalResults)) {
        this.v.$touch();
        return;
      }
      this.$notify.success('Product was added successfully');
      this.clearAllFields();
      this.v.$reset();
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
    ValidateEach,
  },
};
</script>
