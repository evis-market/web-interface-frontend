<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <SellerTabs tab="settings"/>
      <q-form class="q-gutter-md q-pa-md">
        <div class="row items-center">
          <q-icon name="person" class="col-auto q-mr-md" />
          <q-input dense v-model="name" label="Display Name" class="col" />
        </div>
        <div class="row items-center">
          <q-icon name="description" class="col-auto q-mr-md" />
          <q-input dense v-model="description" label="Description" class="col" />
        </div>
        <div class="row items-center">
          <q-icon name="attach_file" class="col-auto q-mr-md" />
          <q-file dense v-model="logo" label="Logo" class="col" />
        </div>
        <div class="row">
          <q-icon name="link" class="col-auto q-mr-md q-mt-md" />
          <div class="col">
            <div v-for="(field, idx) in sites" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
              <q-input dense v-model="field.text" class="col" label="Site" />
              <div class="row items-center justify-between q-gutter-x-sm buttons-group">
                <q-btn
                  dense
                  v-if="sites.length > 1"
                  round
                  icon="close"
                  color="red"
                  align="center"
                  @click="clearField('sites', field.id)"
                />
                <q-btn
                  dense
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
          <q-icon name="email" class="col-auto q-mr-md q-mt-md" />
          <div class="col">
            <div v-for="(field, idx) in emails" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
              <q-input
                dense
                v-model="field.text"
                type="email"
                class="col"
                label="Email"
              />
              <q-input dense v-model="field.type" type="email" class="col" label="Label" />
              <div class="row items-center justify-between q-gutter-x-sm buttons-group">
                <q-btn
                  dense
                  v-if="emails.length > 1"
                  round
                  icon="close"
                  color="red"
                  align="center"
                  @click="clearField('emails', field.id)"
                />
                <q-btn
                  dense
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
          <q-icon name="call" class="col-auto q-mr-md q-mt-md" />
          <div class="col">
            <div v-for="(field, idx) in phones" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
              <q-input
                dense
                v-model="field.text"
                type="tel"
                class="col"
                label="Phone"
              />
              <q-input dense v-model="field.type" type="tel" class="col" label="Label" />
              <div class="row items-center justify-between q-gutter-x-sm buttons-group">
                <q-btn
                  dense
                  v-if="phones.length > 1"
                  round
                  icon="close"
                  color="red"
                  align="center"
                  @click="clearField('phones', field.id)"
                />
                <q-btn
                  dense
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
        <div class="row q-mt-none items-center">
          <q-icon name="account_balance_wallet" class="col-auto q-mr-md" />
          <q-input dense v-model="wallet" label="Wallet" class="col" />
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
    width: 85px
  }
</style>
