<template>
  <q-expansion-item
    expand-separator
    :label="category.name"
    v-model="expanded"
  >
    <div v-for="subcategory in subCategories" :key="subcategory.id">
      <q-item
        clickable
        v-ripple
        :active="activeSubCategorySlug === subcategory.slug"
        @click="getProducts(subcategory)"
        active-class="active-category"
      >
        <q-item-section class="q-pl-md">{{ subcategory.name }}</q-item-section>
      </q-item>
    </div>
  </q-expansion-item>
</template>

<script>
export default {
  name: 'ProductCategory',
  props: ['category', 'expand'],
  data() {
    return {
      expanded: false,
    };
  },
  mounted() {
    this.expanded = this.expand;
  },
  computed: {
    allCategories() {
      return this.$store.getters['common/allCategories'];
    },
    subCategories() {
      return this.allCategories.filter((category) => category.parent_id === this.category.id);
    },
    activeSubCategorySlug() {
      return this.$route.params.subCategorySlug;
    },
  },
  methods: {
    async getProducts(subCategory) {
      this.$router.push({
        name: 'productsList',
        params: {
          categorySlug: this.category.slug,
          subCategorySlug: subCategory.slug,
        },
      });
      const response = await this.$svc.shop.listCategoryProducts({
        categoryIDs: subCategory.id,
        offset: 0,
        limit: 20,
        orderBy: 'name',
      });
      if (this.processError(response)) {
        return;
      }
      this.$store.commit('common/setVisibleProducts', response.seller_products);
    },
  },
};
</script>

<style scoped>
  .active-category {
    color: white;
    background: purple;
  }
</style>
