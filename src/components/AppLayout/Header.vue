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
          :to="{ name: 'login' }" class="text-subhead-2-medium radius-8 ev-border"
        />
        <q-icon class="profile-icon" name="account_circle" v-else @click="openSellerProducts" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import Logo from 'components/ui/Logo';
import CategoriesDropdown from 'components/AppLayout/CategoriesDropdown';
import SearchAutocomplete from 'components/AppLayout/SearchAutocomplete';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: { Logo, CategoriesDropdown, SearchAutocomplete },
  computed: {
    ...mapGetters('common', ['isLoggedIn'])
  },
  methods: {
    openSellerProducts() {
      this.$router.push({ name: 'sellerProductsList'})
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
</style>
