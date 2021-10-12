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
        @click="activeSubCategory = subcategory.name"
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
      activeSubCategory: '',
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
};
</script>

<style scoped>

</style>
