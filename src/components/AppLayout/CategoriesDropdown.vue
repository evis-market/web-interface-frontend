<template>
  <q-btn-dropdown icon="list" label="Categories" class="bg-white text-primary q-mr-sm">
    <q-list>
      <q-item clickable v-close-popup v-for="category in categories" :key="category.id">
        <q-item-section>
          <q-item-label>{{ category.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoriesDropdown',
  computed: {
    categories() {
      return this.$store.getters['common/getMainCategories'];
    },
  },
});
</script>
