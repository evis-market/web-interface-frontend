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
                  class="col"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>
              <div class="row">
                <q-icon name="description" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  label="Description"
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
              <div class="row">
                <q-checkbox
                  v-model="pricePerUsage"
                  label="Per Usage"
                  class="col q-ml-lg"
                />
              </div>
              <div class="row">
                <q-checkbox
                  v-model="pricingUponRequest"
                  label="Pricing available upon request"
                  class="col q-ml-lg"
                />
              </div>
              <div class="row">
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
      dataSamples: [],
      pricingUponRequest: false,
      pricePerUsage: false,
    };
  },
  components: {
    TabMenu,
    SellerTabs,
  },
};
</script>
