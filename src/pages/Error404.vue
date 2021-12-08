<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-404">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Page not found
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageError404',
});
</script>

<style lang="scss" scoped>
  .text-404 {
    font-size: 30vh;

    @media screen and (max-width: $breakpoint-xs-max) {
      font-size: 15vh;
    }
  }
</style>
