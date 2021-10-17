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
                  v-model.trim="v.name.$model"
                  label="Display Name"
                  class="col"
                  :error-message="v.name.$errors.map(err => err.$message).join('. ')"
                  :error="v.name.$error"
                />
              </div>
              <div class="row">
                <q-icon name="description" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="v.descr.$model"
                  label="Description"
                  class="col"
                  :error-message="v.descr.$errors.map(err => err.$message).join('. ')"
                  :error="v.descr.$error"
                />
              </div>
              <div class="row">
                <q-icon name="attach_file" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-file
                  dense
                  v-model="v.logo_url.$model"
                  label="Logo"
                  class="col"
                  :error-message="v.logo_url.$errors.map(err => err.$message).join('. ')"
                  :error="v.logo_url.$error"
                />
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
                      @focus="field.errorMessage = ''"
                      :error="!!field.errorMessage.length"
                      :error-message="field.errorMessage"
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
              <div class="row q-mt-none" :key="emailsKey">
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
                          @focus="item.errorMessage = ''"
                          :error="v.value.$error || !!item.errorMessage.length"
                          :error-message="v.value.$errors.map(err => err.$message).join('. ') || item.errorMessage"
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
                      @focus="field.errorMessage = ''"
                      :error="!!field.errorMessage.length"
                      :error-message="field.errorMessage"
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
                  v-model.trim="v.wallet_for_payments_erc20.$model"
                  label="Wallet"
                  class="col"
                  :error="v.wallet_for_payments_erc20.$error"
                  :error-message="v.wallet_for_payments_erc20.$errors.map(err => err.$message).join('. ')"
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
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import SellerTabs from 'components/Seller/SellerTabs';

import useVuelidate from '@vuelidate/core';
import { reactive } from 'vue';
import { ValidateEach } from '@vuelidate/components';
import { email, required, helpers } from '@vuelidate/validators';
import { svc } from 'boot/svc';

export default {
  name: 'PageSellerSettings',
  setup() {
    const rules = {
      value: { email, required },
    };
    const emails = reactive([
      {
        type_id: svc.seller.ContactTypeIDEmail, value: '', comment: '', errorMessage: '',
      },
    ]);
    const v = useVuelidate();
    return { rules, emails, v };
  },
  data() {
    return {
      emailsKey: 0,
      fieldIDs: {
        emails: 0,
        phones: 0,
        sites: 0,
      },
      name: '',
      descr: '',
      logo_url: null,
      sites: [
        {
          type_id: this.$svc.seller.ContactTypeIDSite, value: '', comment: '', errorMessage: '',
        },
      ],
      phones: [
        {
          type_id: this.$svc.seller.ContactTypeIDPhone, value: '', comment: '', errorMessage: '',
        },
      ],
      wallet_for_payments_erc20: '',
      vuelidateExternalResults: {
        name: [],
        descr: [],
        logo_url: [],
        wallet_for_payments_erc20: [],
        contacts: [],
      },
    };
  },
  validations: {
    name: { required },
    descr: { required },
    logo_url: {},
    wallet_for_payments_erc20: {
      erc20_validator: helpers.withMessage('Incorrect wallet', (val) => {
        if (!val) return true;
        return !!val.match(/^0x[a-fA-F0-9]{40}$/gi);
      }),
      required,
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
      this.emailsKey += 1;
    },
    addField(targetObjectName) {
      const typeIDs = {
        sites: this.$svc.seller.ContactTypeIDSite,
        phones: this.$svc.seller.ContactTypeIDPhone,
        emails: this.$svc.seller.ContactTypeIDEmail,
      };
      this[targetObjectName].push({
        type_id: typeIDs[targetObjectName],
        value: '',
        comment: '',
      });
      this.emailsKey += 1;
    },
    async updateSettings() {
      const data = {
        name: this.name,
        descr: this.descr,
        logo_url: window.location + (this.logo_url?.name || ''),
        wallet_for_payments_erc20: this.wallet_for_payments_erc20,
        contacts: [...this.emails],
      };
      if (this.sites.some((obj) => obj.value)) data.contacts.push(...this.sites);
      if (this.phones.some((obj) => obj.value)) data.contacts.push(...this.phones);

      const response = await this.$svc.seller.updateSettings(data);
      if (this.processErrorWithInvalidFields(response, this.vuelidateExternalResults)) {
        const contactsErrors = this.vuelidateExternalResults.contacts;
        Object.keys(contactsErrors).forEach((idx) => {
          data.contacts[idx].errorMessage = contactsErrors[idx];
        });
        this.v.$touch();
        return;
      }
      this.$notify.success('Settings have been successfully updated');
      this.v.$reset();
    },
    addEmptyErrorMessages(fieldName) {
      this[fieldName].forEach((el) => {
        el.errorMessage = '';
      });
    },
    addDynamicFieldIDs(fieldName) {
      this[fieldName].forEach((el) => {
        el.id = this.fieldIDs[fieldName];
        this.fieldIDs[fieldName] += 1;
      });
    },
  },
  async mounted() {
    const response = await this.$svc.seller.getSettings();
    if (response.error?.code !== 404 && this.processError(response)) {
      return;
    }

    const seller = response.seller || {};
    this.name = seller.name || '';
    this.descr = seller.descr || '';
    this.wallet_for_payments_erc20 = seller.wallet_for_payments_erc20 || '';
    const logo = seller.logo_url;
    if (logo) {
      this.logo_url = new File([logo], logo, { type: 'image/jpeg' });
    }

    const { contacts } = seller;
    if (contacts) {
      const sites = contacts.filter((contact) => contact.type_id === this.$svc.seller.ContactTypeIDSite);
      if (sites.length) {
        this.sites.splice(0);
        this.sites.push(...sites);
      }
      const phones = contacts.filter((contact) => contact.type_id === this.$svc.seller.ContactTypeIDPhone);
      if (phones.length) {
        this.phones.splice(0);
        this.phones.push(...phones);
      }
      const emails = contacts.filter((contact) => contact.type_id === this.$svc.seller.ContactTypeIDEmail);
      if (emails.length) {
        this.emails.splice(0);
        this.emails.push(...emails);
      }
    }

    ['phones', 'emails', 'sites'].forEach((arrName) => {
      this.addEmptyErrorMessages(arrName);
      this.addDynamicFieldIDs(arrName);
    });
    this.emailsKey += 1;
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
</style>
