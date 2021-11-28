<template>
  <div class="categories-list row justify-between q-pa-lg">
    <div
      v-for="category in categories"
      :key="category.id"
      class="col-xs-12 col-md-6 q-gutter-sm q-mb-lg row items-stretch"
    >
      <CategoryPreview :category="category" />
    </div>
  </div>
</template>
<script>
import CategoryPreview from 'components/AppLayout/CategoryPreview';

export default {
  name: 'PageCategoriesList',
  computed: {
    categories() {
      return this.$store.getters['common/getMainCategories'];
    },
  },
  components: { CategoryPreview },
};
</script>

<style lang="scss" scoped>
  .categories-list {
    max-width: $content-max-width;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: $breakpoint-xs-max) {
      padding: 0;
    }
  }
</style>
