<template>
  <q-list bordered padding class="rounded-borders text-primary q-mt-md q-ml-md">
    <q-item-label header>All categories</q-item-label>
    <div v-for="category in mainCategories" :key="category.id">
      <q-item
        clickable
        v-ripple
        :active="link === category.name"
        @click="link = category.name"
        active-class="active-menu-link"
      >
        <q-item-section>{{ category.name }}</q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: 'ProductsCategories',
  data() {
    return {
      link: 'Financial Market Data',
    };
  },
  computed: {
    mainCategories() {
      return this.$store.getters['common/getMainCategories'];
    },
  },
};
</script>

<style scoped>
  .active-menu-link {
    color: white;
    background: purple;
  }
</style>
