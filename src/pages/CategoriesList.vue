<template>
  <div class="row justify-between q-pa-lg items-stretch">
    <div
      v-for="category in categories"
      :key="category.id"
      class="col-xs-12 col-md-6 q-gutter-lg q-mb-lg"
    >
      <CategoryPreview :category="category" />
    </div>
  </div>
</template>
<script>
import CategoryPreview from '../components/CategoryPreview';
import { api } from '../boot/axios';

export default {
  name: 'PageCategoriesList',
  computed: {
    categories() {
      return this.$store.getters['common/allCategories'].filter((category) => category.parent_id === null);
    },
  },
  async mounted() {
    if (!this.categories.length) {
      const response = await api.get('/api/v1/categories/');
      if (response.status === 200) {
        this.$store.commit('common/pushCategories', response.data.categories);
      }
    }
  },
  components: { CategoryPreview },
};
</script>
