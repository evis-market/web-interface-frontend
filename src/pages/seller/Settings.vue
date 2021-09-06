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
            <q-input outlined v-model="name" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Description" readonly />
          </div>
          <div class="col">
            <q-input outlined v-model="description" type="textarea" />
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
            <div v-for="(field, idx) in sites" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
              <q-input outlined v-model="field.text" class="col" />
              <div class="row items-center justify-between q-gutter-x-sm buttons-group">
                <q-btn
                  v-if="sites.length > 1"
                  round
                  icon="close"
                  color="red"
                  align="center"
                  @click="clearField('sites', field.id)"
                />
                <q-btn
                  v-if="sites.length - 1 === idx"
                  round
                  icon="add"
                  color="green"
                  align="center"
                  @click="addField('sites')"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row q-mt-none">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Email" readonly />
          </div>
          <div class="col">
            <div v-for="(field, idx) in emails" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
              <q-input
                outlined
                v-model="field.text"
                type="email"
                class="col"
              />
              <q-input outlined v-model="field.type" type="email" class="col" />
              <div class="row items-center justify-between q-gutter-x-sm buttons-group">
                <q-btn
                  v-if="emails.length > 1"
                  round
                  icon="close"
                  color="red"
                  align="center"
                  @click="clearField('emails', field.id)"
                />
                <q-btn
                  v-if="emails.length - 1 === idx"
                  round
                  icon="add"
                  color="green"
                  align="center"
                  @click="addField('emails')"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row q-mt-none">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Phone" readonly />
          </div>
          <div class="col">
            <div v-for="(field, idx) in phones" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
              <q-input
                outlined
                v-model="field.text"
                type="tel"
                class="col"
              />
              <q-input outlined v-model="field.type" type="tel" class="col" />
              <div class="row items-center justify-between q-gutter-x-sm buttons-group">
                <q-btn
                  v-if="phones.length > 1"
                  round
                  icon="close"
                  color="red"
                  align="center"
                  @click="clearField('phones', field.id)"
                />
                <q-btn
                  v-if="phones.length - 1 === idx"
                  round
                  icon="add"
                  color="green"
                  align="center"
                  @click="addField('phones')"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row q-mt-none">
          <div class="col-lg-1 col-xs-3">
            <q-field borderless label="Wallet" readonly />
          </div>
          <div class="col">
            <q-input outlined v-model="wallet" />
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
        { id: 1, text: 'tovodata.com' },
        { id: 2, text: 'tovodata.com/sales' },
      ],
      emails: [
        { id: 1, text: 'sales@tovodata.com', type: 'Sales' },
        { id: 2, text: 'marketing@tovodata.com', type: 'Marketing' },
        { id: 3, text: 'support@tovodata.com', type: 'Support' },
      ],
      phones: [
        { id: 1, text: '+1(123)456-7890', type: 'Sales' },
        { id: 2, text: '+1(123)456-7891', type: 'Marketing' },
        { id: 3, text: '+1(123)456-7892', type: 'Support' },
      ],
      wallet: 'ERC-20 wallet',
    };
  },
  methods: {
    clearField(targetObjectName, id) {
      this[targetObjectName].splice(this[targetObjectName].findIndex((item) => item.id === id), 1);
    },
    addField(targetObjectName) {
      this[targetObjectName].push({
        id: this[targetObjectName].length + 1,
        text: '',
        type: '',
      });
    },
  },
  components: {
    TabMenu,
    SellerTabs,
  },
};
</script>

<style scoped>
  .buttons-group {
    width: 100px
  }
</style>
