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
        :active="activeSubCategory === subcategory.name"
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
  props: ['category', 'expand', 'activeSubCategory'],
  emits: ['changeActiveSubCategory'],
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
  },
  methods: {
    async getProducts(category) {
      this.$emit('changeActiveSubCategory', category.name);
      const response = await this.$svc.shop.listCategoryProducts({
        categoryIDs: category.id,
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
