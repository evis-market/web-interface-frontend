<template>
  <q-header class="app-header bg-white text-primary row items-center justify-center q-pl-md q-pr-md">
    <q-toolbar class="app-header__toolbar row">
      <router-link :to="{ 'name': 'index' }" class="col-auto">
        <Logo />
      </router-link>
      <q-space></q-space>
      <div class="col-auto q-ml-xl">
        <CategoriesDropdown />
      </div>
      <div class="col-4">
        <SearchAutocomplete />
      </div>
      <q-space></q-space>
      <div class="col-auto col-xl-12 q-ml-xl">
        <!--
        <q-btn
          flat
          no-caps
          label="Request data"
          color="accent"
          class="q-mr-sm text-subhead-2-medium radius-8"
        />
        -->
        <q-btn
          v-if="!isLoggedIn"
          flat
          no-caps
          label="Login"
          color="accent"
          @click="openSignInForm"
          :to="{ name: 'login' }" class="text-subhead-2-medium radius-8 ev-border"
        />
        <q-icon class="profile-icon" name="account_circle" v-else @click="openSellerProducts" />
      </div>
    </q-toolbar>
    <q-dialog v-model="isAuthModalOpened">
      <q-card class="sign-dialog">
        <q-card-section class="row items-center q-pb-none justify-end">
          <q-btn icon="highlight_off" text-color="ev-grey" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="row justify-center">
          <q-card class="sign-content">
            <LoginForm v-if="isSignInFormOpened" @emitSignUp="openSignUpForm" />
            <SignupForm v-if="isSignUpFormOpened" />
          </q-card>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-header>
</template>

<script>
import Logo from 'components/ui/Logo';
import CategoriesDropdown from 'components/AppLayout/CategoriesDropdown';
import SearchAutocomplete from 'components/AppLayout/SearchAutocomplete';
import LoginForm from 'components/User/LoginForm';
import SignupForm from 'components/User/SignupForm';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: { Logo, CategoriesDropdown, SearchAutocomplete, LoginForm, SignupForm },
  data() {
    return {
      isAuthModalOpened: false,
      isSignInFormOpened: false,
      isSignUpFormOpened: false
    }
  },
  computed: {
    ...mapGetters('common', ['isLoggedIn'])
  },
  methods: {
    openSellerProducts() {
      this.$router.push({ name: 'sellerProductsList'})
    },
    openSignInForm() {
      this.isSignUpFormOpened = false;
      this.isSignInFormOpened = true;
      this.isAuthModalOpened = true;
    },
    openSignUpForm() {
      this.isSignUpFormOpened = true;
      this.isSignInFormOpened = false;
      this.isAuthModalOpened = true;
    }
  }
};
</script>

<style lang="scss">
  .app-header {
    min-height: 128px;
    flex-shrink: 0;
    &__toolbar {
      max-width: $content-max-width;
    }
  }

  .profile-icon {
    cursor: pointer;
    font-size: 60px;
  }

  .sign-dialog {
    width: 816px;
    height: 631px;
    background: #0E1B2D;
    box-shadow: -5px 0 15px #2D3744;
    border-radius: 8px;
  }

  .sign-content {
    width: 304px;
    min-height: 321px;
    background: #1D2D42;
    box-shadow: 0 0 8px #0E1B2D;
    border-radius: 4px;
    padding: 24px 32px 48px;
  }
</style>
