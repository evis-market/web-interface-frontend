<template>
  <q-input
    v-model="search"
    debounce="500"
    filled
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
  name: 'AppSearchAutocomplete',
  data() {
    return {
      search: '',
    };
  },
});
</script>
