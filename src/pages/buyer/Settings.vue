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
      name: '',
      wallet: '',
      email: '',
      phone: '',
      description: '',
    };
  },
  validations: {
    wallet: { erc20Validator },
    email: { required, email },
  },
  computed: {
    disableSaving() {
      return !this.name || !this.email || this.v.$errors.length;
    },
  },
  methods: {
    updateSettings() {},
  },
  components: {
    TabMenu,
    BuyerTabs,
  },
};
</script>
