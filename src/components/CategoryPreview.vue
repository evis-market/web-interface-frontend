<template>
  <div class="category-preview column cursor-pointer" @click="openProducts">
    <div
      class="row items-center q-mb-lg"
      :class="logo ? 'justify-between' : 'justify-end'"
    >
      <img
        v-if="logo"
        :src="logo"
        alt="Category icon"
        width="50"
        class="q-mr-sm q-ml-lg"
      >
      <h5>{{ category.name }}</h5>
    </div>
    <p v-if="description" class="q-mb-lg">{{ description }}</p>
    <div class="row q-mt-auto" v-if="recommendedFor.length">
      <div
        v-for="recommendedType in recommendedFor"
        :key="recommendedType.id"
        class="col-sm-6 col-xs-12 row items-center q-mb-sm recommended-for"
      >
        <q-icon name="done" class="q-mr-lg done-icon" />
        <p class="q-mb-none">{{ recommendedType.name }}</p>
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
  $color: #07528C;
  @mixin fontStyles ($size) {
    font-style: normal;
    font-weight: 600;
    font-size: $size;
    line-height: 1em;
    color: $color;
  }
  h5 {
    @include fontStyles(36px);
    margin: 0 40px 0 0;
  }
  p, .done-icon {
    @include fontStyles(18px);
  }
  .category-preview {
    padding: 20px 28px 26px;
    border: 1px solid $color;
    width: 100%;
  }
  .recommended-for {
    min-height: 50px;
  }
</style>
