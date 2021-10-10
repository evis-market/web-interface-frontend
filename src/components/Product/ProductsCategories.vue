<template>
  <q-list bordered class="rounded-borders text-primary q-mt-md q-ml-md">
    <q-item-label header>All categories</q-item-label>
    <div v-for="category in mainCategories" :key="category.id">
      <q-expansion-item
        expand-separator
        :label="category.name"
      >
        <div v-for="subcategory in getChildCategories(category.id)" :key="subcategory.id">
          <q-item
            clickable
            v-ripple
            :active="activeCategory === subcategory.name"
            @click="activeCategory = subcategory.name"
            active-class="active-category"
          >
            <q-item-section class="q-pl-md">{{ subcategory.name }}</q-item-section>
          </q-item>
        </div>
      </q-expansion-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: 'ProductsCategories',
  data() {
    return {
      activeCategory: 'Financial Market Data',
    };
  },
  computed: {
    mainCategories() {
      return this.$store.getters['common/getMainCategories'];
    },
    allCategories() {
      return this.$store.getters['common/allCategories'];
    },
  },
  methods: {
    getChildCategories(categoryID) {
      return this.allCategories.filter((category) => category.parent_id === categoryID);
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
