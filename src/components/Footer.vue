<template>
  <footer class="app-footer">
    <div class="app-footer__decor"></div>
    <div class="app-footer__content">
      <div class="app-footer__pages"></div>
      <div class="app-footer__contacts"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
  .app-footer {
    flex-shrink: 0;
  &__decor {
     -webkit-transform: skew(45deg);
     -ms-transform: skew(45deg);
     transform: skew(45deg);
     background-color: $primary;
     height: 80px;
     width: 55%;
     margin-left: -80px;
   }
  &__content {
     margin-right: -20px;
     margin-left: -20px;
     min-height: 200px;
     background-color: $primary;
   }
  }
</style>
