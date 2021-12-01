<template>
  <q-header class="app-header bg-white text-primary row items-center justify-center q-pl-md q-pr-md">
    <q-toolbar class="app-header__toolbar" :class="flexDirectionClass">
      <router-link :to="{ 'name': 'index' }" class="app-header__logo col-auto">
        <Logo />
      </router-link>
      <q-space></q-space>
      <div class="app-header__categories col-auto q-ml-xl">
        <CategoriesDropdown />
      </div>
      <div class="app-header__search col-4">
        <SearchAutocomplete />
      </div>
      <q-space></q-space>
      <div class="app-header__buttons col-auto col-xl-12 q-ml-xl">
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
          class="app-header__login text-subhead-2-medium radius-8 ev-border"
        />
        <q-icon class="profile-icon" name="account_circle" v-else @click="openSellerProducts" />
      </div>
    </q-toolbar>
    <q-dialog v-model="isAuthModalOpened" :maximized="maximizeDialog">
      <q-card class="sign-dialog">
        <q-card-section class="row items-center q-pb-none justify-end">
          <q-btn
            icon="highlight_off"
            text-color="ev-grey"
            flat round dense
            @click="closeAuthDialog"
          />
        </q-card-section>

        <q-card-section class="row justify-center">
          <q-card class="sign-content">
            <LoginForm v-if="isSignInFormOpened" @emitSignUp="openSignUpForm" />
            <SignupForm v-if="isSignUpFormOpened" @emitSignIn="openSignInForm" />
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
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'Header',
  components: { Logo, CategoriesDropdown, SearchAutocomplete, LoginForm, SignupForm },
  computed: {
    ...mapGetters('common', ['isLoggedIn']),
    ...mapState('common', ['isAuthModalOpened', 'isSignInFormOpened', 'isSignUpFormOpened']),
    maximizeDialog() {
      return this.$q.screen.xs;
    },
    flexDirectionClass() {
      return this.$q.screen.xs ? 'column' : 'row';
    }
  },
  methods: {
    ...mapMutations('common', ['openSignInForm', 'openSignUpForm', 'closeAuthDialog']),
    openSellerProducts() {
      this.$router.push({ name: 'sellerProductsList'})
    },
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
    &__logo {
      order: 1;
      padding: 20px;
    }
    &__categories {
      order: 2;

      @media screen and (max-width: $breakpoint-xs-max) {
        order: 3;
        padding-bottom: 10px;
        margin-left: 0;
      }
    }
    &__search {
      order: 3;

      @media screen and (max-width: $breakpoint-xs-max) {
        order: 2;
        padding-bottom: 10px;
      }
    }
    &__buttons {
      order: 4;
    }
    &__login {
      align-self: stretch;

      @media screen and (max-width: $breakpoint-xs-max) {
        min-width: 231px;
      }
    }
  }

  .profile-icon {
    cursor: pointer;
    font-size: 60px;
  }

  .sign-dialog {
    width: 816px;
    min-height: 631px;
    background: #0E1B2D;
    box-shadow: -5px 0 15px #2D3744;
    border-radius: 8px;
    padding-bottom: 88px;
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
