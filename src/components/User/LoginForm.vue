<template>
  <q-form @submit.prevent="loginSubmit" class="q-gutter-y-md">
    <h5>
      Login
    </h5>
    <q-input
      filled
      ref="email"
      v-model.trim="v.login.$model"
      type="email"
      label="Email"
      hide-bottom-space
      :error-message="v.login.$errors.map(err => err.$message).join('. ')"
      :error="v.login.$error"
    />
    <q-input
      filled
      ref="password"
      v-model="v.password.$model"
      type="password"
      label="Password"
      hide-bottom-space
      :error-message="v.password.$errors.map(err => err.$message).join('. ')"
      :error="v.password.$error"
    />
    <!--
    <q-checkbox
      v-model="rememberMe"
      label="Remember me"
    />
    -->
    <q-btn
      type="submit"
      label="Login"
      color="primary"
      class="full-width q-pt-md q-pb-md q-mb-sm"
      :disable="v.$invalid"
    />
    <div class="row q-mt-md">
      <div>
        <router-link :to="{ name: 'signup' }">Forgot your password?</router-link>
      </div>
      <q-space></q-space>
      <div>
        <router-link :to="{ name: 'signup' }">Signup</router-link>
      </div>
    </div>
  </q-form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
  required, email, minLength, maxLength,
  // sameAs,
} from '@vuelidate/validators';

export default {
  name: 'LoginForm',

  setup() {
    const v = useVuelidate();
    return { v };
  },

  data() {
    return {
      login: '',
      password: '',
      errorMessages: [],
      vuelidateExternalResults: {
        login: [],
        password: [],
      },
    };
  },

  validations: {
    login: { required, email },
    password: { required },
  },

  methods: {
    async loginSubmit() {
      const response = await this.$svc.auth.grantTokenByPassword(this.login, this.password);
      if (this.processErrorWithInvalidFields(response, this.vuelidateExternalResults)) {
        return;
      }
      await this.$router.push({ name: 'sellerProductsList' });
    },
  },
};
</script>
