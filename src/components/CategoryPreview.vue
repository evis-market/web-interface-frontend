<template>
  <div class="category-preview">
    <div class="row justify-between items-center q-mb-lg">
      <img src="../assets/pulse-icon.svg" alt="Category icon" class="q-mr-sm q-ml-lg">
      <h5>Currency Data</h5>
    </div>
    <p class="q-mb-lg">
      Data description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="row">
      <div
        v-for="categoryType in categoryTypes"
        :key="categoryType"
        class="col-6 row items-center q-mb-sm"
      >
        <q-icon name="done" class="q-mr-lg done-icon" />
        <p class="q-mb-none">{{ categoryType }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryTypes: [
        'For traders', 'For analytics', 'For scientists', 'For personal use',
      ],
    };
  },
  name: 'CategoryPreview',
};
</script>

<style lang="scss" scoped>
  $color: #07528C;
  @mixin fontStyles ($size) {
    font-style: normal;
    font-weight: 600;
    font-size: $size;
    line-height: 20px;
    color: $color;
  }
  h5 {
    @include fontStyles(36px);
    margin: 0;
    margin-right: 40px;
  }
  p, .done-icon {
    @include fontStyles(18px);
  }
  .category-preview {
    padding: 20px 28px 26px;
    border: 1px solid $color;
    box-sizing: border-box;
  }
</style>
