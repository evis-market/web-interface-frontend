<template>
  <q-form @submit.prevent="signUpSubmit" class="q-gutter-y-md">
    <h5 class="sign-head">
      Sign up
    </h5>
    <q-icon class="metamask-btn">
      <img src="../../assets/metamask-logo.svg" alt="Metamask" />
    </q-icon>
    <q-input
      dark outlined dense hide-bottom-space
      label-color="ev-grey"
      bg-color="ev-dark"
      class="sign-input"
      v-model.trim="v.first_name.$model"
      label="Name"
      :error-message="v.first_name.$errors.map(err => err.$message).join('. ')"
      :error="v.first_name.$error"
    />
    <q-input
      dark outlined dense hide-bottom-space
      label-color="ev-grey"
      bg-color="ev-dark"
      class="sign-input"
      v-model.trim="v.last_name.$model"
      label="Lastname"
      :error-message="v.last_name.$errors.map(err => err.$message).join('. ')"
      :error="v.last_name.$error"
    />
    <q-input
      dark outlined dense
      label-color="ev-grey"
      bg-color="ev-dark"
      class="sign-input"
      ref="email"
      v-model.trim="v.email.$model"
      type="email"
      label="Email"
      hide-bottom-space
      :error-message="v.email.$errors.map(err => err.$message).join('. ')"
      :error="v.email.$error"
    />
    <q-input
      dark outlined dense
      label-color="ev-grey"
      bg-color="ev-dark"
      class="sign-input"
      ref="password"
      v-model="v.password.$model"
      type="password"
      label="Password"
      hide-bottom-space
      :error-message="v.password.$errors.map(err => err.$message).join('. ')"
      :error="v.password.$error"
    />
    <q-input
      dark outlined dense
      label-color="ev-grey"
      bg-color="ev-dark"
      class="sign-input"
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
    <q-checkbox
      v-model="agreeRules"
      size="sm"
      color="primary"
      dense dark
    >
      <label class="text-ev-grey">
        I give my consent to the processing of my personal data. You can read the rules
        <a
          target="_blank"
          href="https://evis.market/pdf/terms_of_service_en.pdf"
          class="text-ev-grey"
          @click.stop
        >
          here
        </a>
      </label>
    </q-checkbox>
    <q-btn
      no-caps
      type="submit"
      label="Sign up"
      color="primary"
      text-color="white"
      padding="6px"
      class="full-width q-pt-md q-pb-md q-mb-lg"
      :disable="v.$invalid || !agreeRules"
    />
    <div class="text-ev-grey text-center">
      Already have an account?
    </div>
    <q-btn
      no-caps outline
      label="Sign in"
      text-color="ev-grey"
      padding="6px"
      class="sign-btn full-width q-mb-sm"
      @click.prevent="openSignInForm"
    />
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
  emits: ['emitSignIn'],
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
      agreeRules: true,
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
    openSignInForm() {
      this.$emit('emitSignIn')
    }
  },
};
</script>

<style lang="scss">
  .sign-content .q-checkbox {
    align-items: start !important;
  }
</style>
