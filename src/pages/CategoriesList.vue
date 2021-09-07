<template>
  <div class="row justify-between q-pa-lg">
    <div
      v-for="category in categories"
      :key="category.id"
      class="col-xs-12 col-md-6 q-gutter-lg q-mb-lg row items-stretch"
    >
      <CategoryPreview :category="category" />
    </div>
  </div>
</template>
<script>
import CategoryPreview from 'components/CategoryPreview';

export default {
  name: 'PageCategoriesList',
  computed: {
    categories() {
      return this.$store.getters['common/allCategories'].filter((category) => category.parent_id === null);
    },
  },
  async mounted() {
    if (!this.categories.length) {
      const response = await this.$svc.categories.list({});
      if (response.status === 'OK') {
        this.$store.commit('common/pushCategories', response.categories);
      } else {
        alert(response.error.msg);
      }
    }
  },
  components: { CategoryPreview },
};
</script>
