<template>
  <q-btn-dropdown
    no-caps
    icon="menu"
    :label="label"
    class="categories-dropdown radius-8 bg-primary text-white text-subhead-2-medium q-mr-sm"
  >
    <q-list>
      <q-item clickable v-close-popup v-for="category in categories" :key="category.id" @click="openProducts(category)">
        <q-item-section>
          <q-item-label>{{ category.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoriesDropdown',
  computed: {
    categories() {
      return this.$store.getters['common/getMainCategories'];
    },
    label() {
      const label = 'Categories';
      if (this.$q.screen.xs) {
        return label;
      }
      return this.$q.screen.width < 1041 ? '' : label;
    },
  },
  methods: {
    async getProductsByCategoryID(id) {
      const response = await this.$svc.shop.listCategoryProducts({
        offset: 0,
        limit: 20,
        orderBy: 'name',
        categoryIDs: id
      });
      if (this.processError(response)) {
        return;
      }
      this.$store.commit('common/setVisibleProducts', response.seller_products);
    },
    async openProducts(category) {
      if (this.$route.name === 'productsList') {
        await this.getProductsByCategoryID(category.id);
      }
      await this.$router.push({
        name: 'productsList',
        params: {
          categoryID: category.id,
          categorySlug: category.slug,
        },
      });
    }
  }
});
</script>

<style lang="scss">
  .categories-dropdown {
    @media screen and (max-width: $breakpoint-xs-max) {
      min-width: 231px
    }
  }
</style>
