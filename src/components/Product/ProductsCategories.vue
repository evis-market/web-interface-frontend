<template>
  <q-list bordered class="rounded-borders text-primary q-mt-md q-ml-md">
    <q-item-label header>All categories</q-item-label>
    <div v-for="category in mainCategories" :key="category.id">
      <ProductCategory
        :category="category"
        :expand="category.id == activeCategory"
        :active-sub-category="activeSubCategory"
        @change-active-sub-category="changeActiveSubCategory"
      />
    </div>
  </q-list>
</template>

<script>
import ProductCategory from './ProductCategory';

export default {
  name: 'ProductsCategories',
  data() {
    return {
      activeSubCategory: '',
    };
  },
  computed: {
    mainCategories() {
      return this.$store.getters['common/getMainCategories'];
    },
    activeCategory() {
      return this.$route.params.categoryID;
    },
  },
  methods: {
    changeActiveSubCategory(categoryName) {
      this.activeSubCategory = categoryName;
    },
  },
  components: { ProductCategory },
};
</script>

<style scoped>
</style>
