<template>
  <q-input
    class="search-input text-caption-1"
    v-model="search"
    debounce="500"
    outlined
    placeholder="Search"
    color="primary"
    label-color="dark"
  >
    <template v-slot:append>
      <q-btn color="primary" icon="search" text-color="white" class="search-btn" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchAutocomplete',
  data() {
    return {
      search: '',
    };
  },
});
</script>

<style lang="scss">
  .search-input .q-field__control {
    height: 47px;
    padding: 0;
    padding-left: 10px;
  }
  .search-btn {
    height: 46px;
    margin: 0;
    bottom: 4px;
  }
</style>
