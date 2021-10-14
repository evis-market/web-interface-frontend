<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="seller"/>
      <BuyerTabs tab="settings"/>
      <div class="full-width row justify-center">
        <q-card class="col-lg-9 col-md-10 col-xs-12">
          <q-card-section>
            <q-form class="q-pa-md">
              <div class="row">
                <q-icon name="person" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="first_name"
                  label="Display Name"
                  class="col"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>
              <div class="row">
                <q-icon name="badge" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="last_name"
                  label="Last name"
                  class="col"
                  :rules="[val => true]"
                />
              </div>
              <div class="row q-mt-none">
                <q-icon name="email" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="v.email.$model"
                  type="email"
                  label="Email"
                  class="col"
                  :error="v.email.$error"
                  :error-message="v.email.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row q-mt-none">
                <q-icon name="call" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="phone"
                  type="tel"
                  label="Phone"
                  class="col"
                  :rules="[val => true]"
                />
              </div>
              <div class="row q-mt-none">
                <q-icon name="account_balance_wallet" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="v.wallet_erc20.$model"
                  label="Wallet"
                  class="col"
                  :error="v.wallet_erc20.$error"
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
    </div>
  </div>
</template>

<script>
import TabMenu from 'components/AppLayout/TabMenu';
import BuyerTabs from 'components/Buyer/BuyerTabs';
import useVuelidate from '@vuelidate/core';
import erc20Validator from 'src/validators/erc20_validator';
import { email, required } from '@vuelidate/validators';

export default {
  name: 'PageBuyerSettings',
  data() {
    return {
      v: useVuelidate(),
      first_name: '',
      last_name: '',
      wallet_erc20: '',
      email: '',
      phone: '',
      vuelidateExternalResults: {
        first_name: [],
        last_name: [],
        wallet_erc20: [],
        email: [],
        phone: [],
      },
    };
  },
  validations: {
    wallet_erc20: { erc20Validator },
    email: { required, email },
  },
  async mounted() {
    const response = await this.$svc.users.getLoggedInUserProfile();
    if (this.processError(response)) {
      return;
    }
    const { profile = {} } = response;
    this.first_name = profile.first_name || '';
    this.last_name = profile.last_name || '';
    this.wallet_erc20 = profile.wallet_erc20 || '';
    this.email = profile.email || '';
    this.phone = profile.phone || '';
  },
  computed: {
    disableSaving() {
      return !this.first_name || !this.email || this.v.$errors.length;
    },
  },
  methods: {
    async updateSettings() {
      const response = await this.$svc.users.updateLoggedInUserProfile({
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        wallet_erc20: this.wallet_erc20,
      });
      if (this.processErrorWithInvalidFields(response, this.vuelidateExternalResults)) {
        return;
      }
      this.$notify.success('Settings have been successfully updated');
    },
  },
  components: {
    TabMenu,
    BuyerTabs,
  },
};
</script>
