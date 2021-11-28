<template>
  <q-form @submit.prevent="loginSubmit" class="q-gutter-y-md">
    <h5 class="sign-head">
      Sign in
    </h5>
    <q-icon class="metamask-btn">
      <img src="../../assets/metamask-logo.svg" alt="Metamask" />
    </q-icon>
    <q-input
      dark outlined dense
      class="sign-input"
      ref="email"
      label-color="ev-grey"
      bg-color="ev-dark"
      v-model.trim="v.login.$model"
      type="email"
      label="Email"
      hide-bottom-space
      :error-message="v.login.$errors.map(err => err.$message).join('. ')"
      :error="v.login.$error"
    />
    <q-input
      dark outlined dense
      class="sign-input"
      label-color="ev-grey"
      bg-color="ev-dark"
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
      no-caps
      type="submit"
      label="Sign in"
      color="primary"
      text-color="white"
      padding="6px"
      class="sign-btn full-width q-mb-sm q-mt-lg"
      :disable="v.$invalid"
    />
    <div class="column items-stretch q-mt-xs">
      <div class="self-center">
        <router-link :to="{}" class="forgot-pwd-link text-ev-grey">Forgot password?</router-link>
      </div>
      <q-space></q-space>
      <div>
        <q-btn
          no-caps outline
          label="Sign up"
          text-color="ev-grey"
          padding="6px"
          class="sign-btn full-width q-mb-sm q-mt-xl"
          @click.prevent="openSignUpForm"
        />
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
  emits: ['emitSignUp'],
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
    openSignUpForm() {
      this.$emit('emitSignUp')
    }
  },
};
</script>

<style lang="scss">
  .sign-head {
    font-weight: bold;
    font-size: 18px;
    line-height: 170%;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 0;
  }

  .metamask-btn {
    width: 240px;
    height: 40px;
    background: #F9F9F9;
    border-radius: 4px;
    cursor: pointer;
    margin: 16px 0;
  }

  .sign-input {
    border-radius: 4px;
  }

  .sign-btn {
    border-radius: 4px;
    font-weight: bold;
  }

  .forgot-pwd-link {
    justify-self: center;
    opacity: 0.6;
  }
</style>
