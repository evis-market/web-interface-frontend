<template>
  <div class="category-preview column cursor-pointer" @click="openProducts">
    <div
      class="row q-mb-lg"
      :class="logo ? 'justify-start' : 'justify-end'"
    >
      <img
        v-if="logo"
        :src="logo"
        alt="Category icon"
        width="64"
        height="64"
        class="q-mr-md radius-8"
      >
      <h5 class="col text-title-4-bold text-primary q-pt-lg q-ma-none">{{ category.name }}</h5>
    </div>
    <p v-if="description" class="q-mb-lg text-subhead-2-medium text-dark">{{ description }}</p>
    <div class="row q-mt-auto items-end" v-if="recommendedFor.length">
      <div
        v-for="recommendedType in recommendedFor"
        :key="recommendedType.id"
        class="col-sm-6 col-xs-12 row items-center q-mb-sm recommended-for"
      >
        <q-icon name="done" class="category-preview__icon q-mr-sm text-primary text-title-4-bold" />
        <p class="q-mb-none text-subhead-2-bold text-dark">{{ recommendedType.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
  name: 'CategoryPreview',
  computed: {
    logo() {
      return this.category.logo_url;
    },
    recommendedFor() {
      return this.category.recommended_for;
    },
    description() {
      return this.category.descr;
    },
  },
  methods: {
    openProducts() {
      this.$router.push({
        name: 'productsList',
        params: {
          categoryID: this.category.id,
          categorySlug: this.category.slug,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .category-preview {
    padding: 48px 32px;
    border: 2px solid $grey;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    &__icon {
      font-weight: bold;
      font-size: 28px;
    }
  }
  .recommended-for {
    min-height: 50px;
  }
</style>
