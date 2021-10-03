<template>
  <q-form @submit.prevent="signUpSubmit" class="q-gutter-y-md">
    <h5>
      Create an account
    </h5>
    <q-input
      filled
      v-model.trim="v.first_name.$model"
      label="Name"
      :error-message="v.first_name.$errors.map(err => err.$message).join('. ')"
      :error="v.first_name.$error"
    />
    <q-input
      filled
      v-model.trim="v.last_name.$model"
      label="Lastname"
      :error-message="v.last_name.$errors.map(err => err.$message).join('. ')"
      :error="v.last_name.$error"
    />
    <q-input
      filled
      ref="email"
      v-model.trim="v.email.$model"
      type="email"
      label="Email"
      hide-bottom-space
      :error-message="v.email.$errors.map(err => err.$message).join('. ')"
      :error="v.email.$error"
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
    <q-input
      filled
      ref="confirmPassword"
      v-model="confirmPassword"
      type="password"
      label="Confirm password"
      hide-bottom-space
      error-message="Confirm password must be identical"
      :error="v.confirmPassword.$invalid"
    />
    <!--
    <q-checkbox
      v-model="rememberMe"
      label="Remember me"
    />
    -->
    <q-btn
      type="submit"
      label="Create account"
      color="primary"
      class="full-width q-pt-md q-pb-md q-mb-sm"
      :disable="v.$invalid"
    />
    <p class="text-secondary text-center">
      By creating account you agree to our<br/>
      <router-link :to="{}">Terms of Service</router-link>
      and
      <router-link :to="{}">Privacy Policy</router-link>
    </p>
    <div class="row q-mt-md">
      <div>
        Already have an account?
      </div>
      <q-space></q-space>
      <div>
        <router-link :to="{ name: 'login' }">Sign in</router-link>
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

// From global constants (or API?) for backlog
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 32;

export default {
  name: 'SignupForm',
  setup() {
    const v = useVuelidate();
    return { v };
  },

  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      errorMessages: [],
      vuelidateExternalResults: {
        first_name: [],
        last_name: [],
        email: [],
        password: [],
      },
    };
  },

  validations: {
    first_name: {},
    last_name: {},
    email: { required, email },
    password: {
      required,
      minLength: minLength(MIN_PASSWORD_LENGTH),
      maxLength: maxLength(MAX_PASSWORD_LENGTH),
      // Password complexity from util's for backlog
      // goodPassword: (password) => {
      //   /[a-z]/.test(password) &&
      //   /[A-Z]/.test(password) &&
      //   /[0-9]/.test(password)
      // },
    },
    confirmPassword: {
      // sameAs('password') not working
      sameAsPassword(confirm) { // from util's for backlog
        return this.password.length >= MIN_PASSWORD_LENGTH
          && this.password.length <= MAX_PASSWORD_LENGTH
          ? this.password === confirm
          : true;
      },
    },
  },

  methods: {
    async signUpSubmit() {
      const signUpResponse = await this.$svc.users.signUpByEmailOrPhone({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      });
      if (this.processErrorWithInvalidFields(signUpResponse, this.vuelidateExternalResults)) {
        return;
      }

      const authResponse = await this.$svc.auth.grantTokenByPassword(this.email, this.password);
      if (this.processError(authResponse)) {
        return;
      }

      await this.$router.push({ name: 'sellerProductsList' });
    },
  },
};
</script>
