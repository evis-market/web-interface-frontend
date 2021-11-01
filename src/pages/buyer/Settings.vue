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
                  v-model.trim="v.first_name.$model"
                  label="Name"
                  class="col"
                  :error="v.first_name.$error"
                  :error-message="v.first_name.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <!--
              <div class="row">
                <q-icon name="badge" class="col-auto q-mr-md q-mt-sm" size="sm" />
                <q-input
                  dense
                  v-model.trim="v.last_name.$model"
                  label="Last name"
                  class="col"
                  :error="v.last_name.$error"
                  :error-message="v.last_name.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              -->
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
                  v-model.trim="v.phone.$model"
                  type="tel"
                  label="Phone"
                  class="col"
                  :error="v.phone.$error"
                  :error-message="v.phone.$errors.map(err => err.$message).join('. ')"
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
                  :error-message="v.wallet_erc20.$errors.map(err => err.$message).join('. ')"
                />
              </div>
              <div class="row justify-end">
                <q-btn label="Cancel" type="reset" color="primary" flat @click="loadData()" />
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
import { email, required, requiredIf, helpers, maxLength } from '@vuelidate/validators';

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

  validations() {
    return {
      first_name: {
        maxLength: maxLength(190)
      },

      last_name: { },

      wallet_erc20: {
        erc20Validator: helpers.withMessage('Incorrect wallet', erc20Validator),
        requiredIfNoLogin: helpers.withMessage('Please set wallet or email, or phone', requiredIf(!this.email && !this.phone))
      },

      email: { email },

      phone: { },
    }
  },

  mounted() {
    this.loadData();
  },

  computed: {
    disableSaving() {
      return (!this.email && !this.phone && !this.wallet_erc20) || this.v.$errors.length;
    },
  },

  methods: {
    async loadData() {
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
      this.v.$reset();
    },

    async updateSettings() {
      const response = await this.$svc.users.updateLoggedInUserProfile({
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        wallet_erc20: this.wallet_erc20,
      });
      if (this.processErrorWithInvalidFields(response, this.vuelidateExternalResults)) {
        this.v.$touch();
        return;
      }
      this.v.$reset();
      this.$notify.success('Settings have been successfully updated');
    },
  },
  components: {
    TabMenu,
    BuyerTabs,
  },
};
</script>
