<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <SellerTabs tab="settings"/>
      <q-form class="q-gutter-md q-pa-md">
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Display Name" readonly />
          </div>
          <div class="col">
            <q-input v-model="name" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Description" readonly />
          </div>
          <div class="col">
            <q-input v-model="description" type="textarea" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Logo" readonly />
          </div>
          <div class="col">
            <q-file outlined v-model="logo">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Site" readonly />
          </div>
          <div class="col">
            <q-input v-model="site" />
            <q-input v-model="site" />
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import SellerTabs from 'components/Seller/SellerTabs';

export default {
  name: 'PageSellerSettings',
  data() {
    return {
      name: 'TovoData',
      description: 'We sell data.\n'
        + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua.\n',
      logo: null,
      site: 'tovodata.com',
    };
  },
  components: {
    TabMenu,
    SellerTabs,
  },
};
</script>
