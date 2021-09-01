<template>
  <div class="category-preview">
    <div
      class="row items-center q-mb-lg"
      :class="logo ? 'justify-between' : 'justify-end'"
    >
      <img
        v-if="logo"
        :src="logo"
        alt="Category icon"
        class="q-mr-sm q-ml-lg"
      >
      <h5>{{ category.name }}</h5>
    </div>
    <p v-if="description" class="q-mb-lg">{{ description }}</p>
    <div class="row" v-if="recommendedFor.length">
      <div
        v-for="recommendedType in recommendedFor"
        :key="recommendedType.id"
        class="col-6 row items-center q-mb-sm"
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
    box-sizing: border-box;
    min-width: 440px;
  }
</style>
