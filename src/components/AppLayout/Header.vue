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
          flat
          no-caps
          label="Login"
          color="accent"
          :to="{ name: 'login' }" class="text-subhead-2-medium radius-8 ev-border"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import Logo from 'components/ui/Logo';
import CategoriesDropdown from 'components/AppLayout/CategoriesDropdown';
import SearchAutocomplete from 'components/AppLayout/SearchAutocomplete';

export default {
  name: 'Header',
  components: { Logo, CategoriesDropdown, SearchAutocomplete }
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
</style>
