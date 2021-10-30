<template>
  <q-btn-dropdown
    no-caps
    icon="menu"
    :label="label"
    class="radius-8 bg-primary text-white text-subhead-2-medium q-mr-sm"
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
    label() {
      return this.$q.screen.width < 1041 ? '' : 'Categories';
    },
  },
});
</script>
