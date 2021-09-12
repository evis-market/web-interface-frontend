<template>
  <form @submit.prevent="registrationSubmit" class="q-pa-md">
    <h5>
      Create an account
    </h5>
    <q-input
      filled
      v-model.trim="name"
      label="Name"
      class="q-mb-md"
    />
    <q-input
      filled
      v-model.trim="lastname"
      label="Lastname"
      class="q-mb-md"
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
      class="q-mb-md"
    />
    <q-input
      filled
      ref="password"
      v-model="password"
      type="password"
      label="Password"
      hide-bottom-space
      error-message="Minimum password length is 8 characters"
      :error="password.length && v.password.$invalid"
      class="q-mb-md"
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
      class="q-mb-md"
    />
    <q-checkbox
      v-model="rememberMe"
      label="Remember me"
      class="q-mb-md"
    />
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
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
  required, email, minLength,
  // sameAs,
} from '@vuelidate/validators';

const MIN_PASSWORD_LENGTH = 8;

export default {
  name: 'RegistrationForm',
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
          ? this.password === confirm
          : true;
      },
    },
  },
  methods: {
    registrationSubmit() {
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
