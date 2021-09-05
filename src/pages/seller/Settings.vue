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
            <q-input v-model="obj.site" v-for="obj in sites" :key="obj.id" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Email" readonly />
          </div>
          <div class="col">
            <q-input v-model="obj.email" type="email" v-for="obj in emails" :key="obj.id" />
          </div>
          <div class="col">
            <q-input v-model="obj.type" type="email" v-for="obj in emails" :key="obj.id" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Phone" readonly />
          </div>
          <div class="col">
            <q-input v-model="obj.phone" type="tel" v-for="obj in phones" :key="obj.id" />
          </div>
          <div class="col">
            <q-input v-model="obj.type" type="tel" v-for="obj in phones" :key="obj.id" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Wallet" readonly />
          </div>
          <div class="col">
            <q-input v-model="wallet" />
          </div>
        </div>
        <div class="row justify-end">
          <q-btn label="Cancel" type="reset" color="primary" flat />
          <q-btn label="Save" type="submit" color="primary" class="q-ml-sm" @click.prevent="" />
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
      sites: [
        { id: 1, site: 'tovodata.com' },
        { id: 2, site: 'tovodata.com/sales' },
      ],
      emails: [
        { id: 1, email: 'sales@tovodata.com', type: 'Sales' },
        { id: 2, email: 'marketing@tovodata.com', type: 'Marketing' },
        { id: 3, email: 'support@tovodata.com', type: 'Support' },
      ],
      phones: [
        { id: 1, phone: '+1(123)456-7890', type: 'Sales' },
        { id: 2, phone: '+1(123)456-7891', type: 'Marketing' },
        { id: 3, phone: '+1(123)456-7892', type: 'Support' },
      ],
      wallet: 'ERC-20 wallet',
    };
  },
  components: {
    TabMenu,
    SellerTabs,
  },
};
</script>
