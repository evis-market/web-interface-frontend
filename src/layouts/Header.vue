<template>
  <q-header class="bg-white text-primary evis-header" reveal>
    <router-link :to="{ name: 'main' }" class="evis-logo">
      <!-- TODO: (Райков) Запросить у дизайнера svg-логотип -->
      <img src="~/assets/evis-logo.png" width="85" />
    </router-link>
    <div class="evis-header-left">
      <InfoPagesMenu />
      <div class="evis-header-search">
        <AppSearchCategoriesDropdown />
        <AppSearchAutocomplete class="evis-header-search-input" />
      </div>
    </div>
    <div class="evis-header-right">

    </div>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue';
import AppSearchCategoriesDropdown from 'src/common-components/AppSearch/AppSearchCategoriesDropdown';
import InfoPagesMenu from 'layouts/InfoPagesMenu';
import AppSearchAutocomplete from 'src/common-components/AppSearch/AppSearchAutocomplete';

export default defineComponent({
  name: 'Header',

  components: {
    AppSearchAutocomplete,
    InfoPagesMenu,
    AppSearchCategoriesDropdown,
  },
});
</script>

<style lang="sass" scoped>
.evis-header
  display: flex
  flex-direction: row
  padding-top: 29px
  @media (min-width: 960px)
    max-width: 960px
    margin: 0 auto

.evis-header-left
  padding: 12px 0 0 48px
  width: 57%

.evis-header-search
  display: flex
  margin-top: 18px

.evis-header-search-input
  margin-left: 20px
  width: 100%
</style>
