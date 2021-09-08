<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <SellerTabs tab="settings"/>
      <q-card>
        <q-card-section>
          <q-form class="q-gutter-md q-pa-md">
            <div class="row items-center">
              <q-icon name="person" class="col-auto q-mr-md" size="sm" />
              <q-input dense v-model="name" label="Display Name" class="col" />
            </div>
            <div class="row items-center">
              <q-icon name="description" class="col-auto q-mr-md" size="sm" />
              <q-input dense v-model="description" label="Description" class="col" />
            </div>
            <div class="row items-center">
              <q-icon name="attach_file" class="col-auto q-mr-md" size="sm" />
              <q-file dense v-model="logo" label="Logo" class="col" />
            </div>
            <div class="row">
              <q-icon name="link" class="col-auto q-mr-md q-mt-sm" size="sm" />
              <div class="col">
                <div v-for="(field, idx) in sites" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
                  <q-input dense v-model="field.value" class="col" label="Site" />
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
              <q-icon name="email" class="col-auto q-mr-md q-mt-sm" size="sm" />
              <div class="col">
                <div v-for="(field, idx) in emails" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
                  <q-input
                    dense
                    v-model="field.value"
                    type="email"
                    class="col"
                    label="Email"
                  />
                  <q-input dense v-model="field.comment" type="email" class="col" label="Comment" />
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
              <q-icon name="call" class="col-auto q-mr-md q-mt-sm" size="sm" />
              <div class="col">
                <div v-for="(field, idx) in phones" :key="field.id" class="row items-center q-gutter-sm q-mb-md">
                  <q-input
                    dense
                    v-model="field.value"
                    type="tel"
                    class="col"
                    label="Phone"
                  />
                  <q-input dense v-model="field.comment" type="tel" class="col" label="Comment" />
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
              <q-icon name="account_balance_wallet" class="col-auto q-mr-md" size="sm" />
              <q-input dense v-model="wallet" label="Wallet" class="col" />
            </div>
            <div class="row justify-end">
              <q-btn label="Cancel" type="reset" color="primary" flat />
              <q-btn label="Save" type="submit" color="primary" class="q-ml-sm" @click.prevent="updateSettings" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
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
      name: '',
      description: '',
      logo: null,
      sites: [
        { type_id: 1, value: '', comment: '' },
      ],
      emails: [
        { type_id: 3, value: '', comment: '' },
      ],
      phones: [
        { type_id: 2, value: '', comment: '' },
      ],
      wallet: '',
    };
  },
  methods: {
    clearField(targetObjectName, id) {
      this[targetObjectName].splice(this[targetObjectName].findIndex((item) => item.id === id), 1);
    },
    addField(targetObjectName) {
      const typeIDs = { sites: 1, phones: 2, emails: 3 };
      this[targetObjectName].push({
        type_id: typeIDs[targetObjectName],
        value: '',
        comment: '',
      });
    },
    async updateSettings() {
      await this.$svc.seller.updateSettings({
        name: this.name,
        description: this.description,
        logo_url: window.location + (this.logo?.name || ''),
        wallet_for_payments_erc20: this.wallet,
        contacts: [...this.sites, ...this.emails, ...this.phones],
      });
    },
  },
  async beforeCreate() {
    const response = await this.$svc.seller.getSettings();
    if (response.status === 'OK') {
      const { seller } = response;
      this.name = seller.name;
      this.description = seller.description;
      this.wallet = seller.wallet_for_payments_erc20;
      const logo = seller.logo_url;
      if (logo) this.logo = new File([logo], logo, { type: 'image/jpeg' });
      const { contacts } = seller;
      const sites = contacts.filter((contact) => contact.type_id === 1);
      if (sites.length) this.sites = sites;
      const phones = contacts.filter((contact) => contact.type_id === 2);
      if (phones.length) this.phones = phones;
      const emails = contacts.filter((contact) => contact.type_id === 3);
      if (emails.length) this.emails = emails;
    } else {
      console.error(response.error.msg);
    }
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
