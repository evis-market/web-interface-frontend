<template>
  <div class="row justify-between q-pa-lg">
    <div v-for="i in 6" :key="i" class="col-xs-12 col-md-6 q-gutter-lg q-mb-lg">
      <CategoryPreview />
    </div>
  </div>
</template>

<script>
import CategoryPreview from '../components/CategoryPreview';
import { api } from '../boot/axios';

export default {
  name: 'CategoriesList',
  computed: {
    categories() {
      return this.$store.getters['common/allCategories'];
    },
  },
  async mounted() {
    if (!this.categories.length) {
      const response = await api.get('/categories/');
      if (response.status === 200) {
        this.$store.commit('pushCategories', response.data.categories);
      }
    }
  },
  components: { CategoryPreview },
};
</script>
