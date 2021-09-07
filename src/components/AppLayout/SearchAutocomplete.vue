<template>
  <q-input dense
    class="super-small full-width"
    v-model="search"
    debounce="500"
    outlined
    placeholder="Search"
  >
    <template v-slot:append>
      <q-icon name="search" />
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
