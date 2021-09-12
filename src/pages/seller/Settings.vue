<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <SellerTabs tab="settings"/>
      <div class="full-width row justify-center">
        <q-card class="col-lg-9 col-md-10 col-xs-12">
          <q-card-section>
            <q-form class="q-pa-md">
              <div class="row">
                <q-icon name="person" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="name"
                  label="Display Name"
                  class="col"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>
              <div class="row">
                <q-icon name="description" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="description"
                  label="Description"
                  class="col"
                  :rules="[val => true]"
                />
              </div>
              <div class="row">
                <q-icon name="attach_file" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-file dense v-model="logo" label="Logo" class="col" :rules="[val => true]" />
              </div>
              <div class="row">
                <q-icon name="link" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <div class="col">
                  <div v-for="(field, idx) in sites" :key="field.id" class="row items-center q-gutter-sm">
                    <q-input
                      dense
                      v-model.trim="field.value"
                      class="col"
                      label="Site"
                      :rules="[val => true]"
                    />
                    <div class="row q-mb-lg justify-between q-gutter-x-sm buttons-group">
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
                  <ValidateEach
                    v-for="(item, index) in emails"
                    :key="index"
                    :state="item"
                    :rules="rules"
                  >
                    <template #default="{ v }">
                      <div class="row items-center q-gutter-sm">
                        <q-input
                          dense
                          v-model.trim="v.value.$model"
                          type="email"
                          class="col"
                          label="Email"
                          :error="v.value.$error"
                          :error-message="v.value.$errors.map(err => err.$message).join('. ')"
                        />
                        <q-input
                          dense
                          v-model.trim="item.comment"
                          type="email"
                          class="col"
                          label="Comment"
                          :rules="[val => true]"
                        />
                        <div class="row q-mb-lg justify-between q-gutter-x-sm buttons-group">
                          <q-btn
                            dense
                            v-if="emails.length > 1"
                            round
                            icon="close"
                            color="red"
                            align="center"
                            @click="clearField('emails', item.id)"
                          />
                          <q-btn
                            dense
                            v-if="emails.length - 1 === index"
                            round
                            icon="add"
                            color="green"
                            align="center"
                            @click="addField('emails')"
                          />
                        </div>
                      </div>
                    </template>
                  </ValidateEach>
                </div>
              </div>
              <div class="row q-mt-none">
                <q-icon name="call" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <div class="col">
                  <div v-for="(field, idx) in phones" :key="field.id" class="row items-center q-gutter-sm">
                    <q-input
                      dense
                      v-model.trim="field.value"
                      type="tel"
                      class="col"
                      label="Phone"
                      :rules="[val => true]"
                    />
                    <q-input
                      dense
                      v-model.trim="field.comment"
                      type="tel"
                      class="col"
                      label="Comment"
                      :rules="[val => true]"
                    />
                    <div class="row q-mb-lg justify-between q-gutter-x-sm buttons-group">
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
              <div class="row q-mt-none">
                <q-icon name="account_balance_wallet" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="v.wallet.$model"
                  label="Wallet"
                  class="col"
                  :error="v.wallet.$error"
                  error-message="Incorrect wallet"
                />
              </div>
              <div class="row justify-end">
                <q-btn label="Cancel" type="reset" color="primary" flat />
                <q-btn
                  label="Save"
                  type="submit"
                  color="primary"
                  class="q-ml-sm"
                  @click.prevent="updateSettings"
                  :disabled="disableSaving"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <q-dialog v-model="error">
        <q-card class="error-alert">
          <q-card-section>
            <div class="text-h6">Error</div>
          </q-card-section>
          <q-card-section class="q-pt-none">{{ errorMessage }}</q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import SellerTabs from 'components/Seller/SellerTabs';

import useVuelidate from '@vuelidate/core';
import { reactive } from 'vue';
import { ValidateEach } from '@vuelidate/components';
import { email, required } from '@vuelidate/validators';

export default {
  name: 'PageSellerSettings',
  setup() {
    const rules = {
      value: { email, required },
    };
    const emails = reactive([
      { type_id: 3, value: '', comment: '' },
    ]);
    const v = useVuelidate();
    return { rules, emails, v };
  },
  data() {
    return {
      name: '',
      description: '',
      logo: null,
      sites: [
        { type_id: 1, value: '', comment: '' },
      ],
      phones: [
        { type_id: 2, value: '', comment: '' },
      ],
      wallet: '',
      error: false,
      errorMessage: '',
    };
  },
  validations: {
    wallet: {
      erc20_validator(val) {
        if (!val) return true;
        return !!val.match(/^0x[a-fA-F0-9]{40}$/gi);
      },
    },
  },
  computed: {
    emailValues() {
      return this.emails.reduce((acc, curr) => acc + curr.value, '');
    },
    disableSaving() {
      return !this.name || !this.emailValues || this.v.$errors.length;
    },
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
      const response = await this.$svc.seller.updateSettings({
        name: this.name,
        description: this.description,
        logo_url: window.location + (this.logo?.name || ''),
        wallet_for_payments_erc20: this.wallet,
        contacts: [...this.sites, ...this.emails, ...this.phones],
      });
      if (response.status !== 'OK') {
        this.errorMessage = response.error.msg;
        this.error = true;
      }
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
      this.errorMessage = response.error.msg;
      this.error = true;
    }
  },
  components: {
    TabMenu,
    SellerTabs,
    ValidateEach,
  },
};
</script>

<style scoped>
  .buttons-group {
    width: 85px
  }
  .error-alert {
    width: 700px;
    max-width: 80vw;
  }
</style>
