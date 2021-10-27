<template>
  <q-btn-dropdown
    no-caps
    icon="menu"
    label="Categories"
    class="bg-primary text-white text-subhead-2-medium q-mr-sm"
  >
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
