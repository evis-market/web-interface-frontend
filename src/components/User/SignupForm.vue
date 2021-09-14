<template>
  <q-form @submit.prevent="signupSubmit" class="q-gutter-y-md">
    <h5>
      Create an account
    </h5>
    <q-input
      filled
      v-model.trim="name"
      label="Name"
    />
    <q-input
      filled
      v-model.trim="lastname"
      label="Lastname"
    />
    <q-input
      filled
      ref="email"
      v-model.trim="email"
      type="email"
      label="Email"
      hide-bottom-space
      error-message="Please enter a valid email address"
      :error="email.length && v.email.$invalid"
    />
    <q-input
      filled
      ref="password"
      v-model="password"
      type="password"
      label="Password"
      hide-bottom-space
      error-message="Password length of 8 to 32 characters"
      :error="password.length && v.password.$invalid"
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
    <div class="flex q-mt-xl">
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
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      errorMessages: [],
    };
  },
  validations: {
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
      sameAsPassword: function (confirm) { // from util's for backlog
        return this.password.length >= MIN_PASSWORD_LENGTH
          && this.password.length <= MAX_PASSWORD_LENGTH
          ? this.password === confirm
          : true;
      },
    },
  },
  methods: {
    signupSubmit() {
      console.log({
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
