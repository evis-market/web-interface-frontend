<template>
  <div class="app-user-panel">
    <div class="app-user-panel-top">
      <q-btn class="panel-button sell">Sell data</q-btn>
      <q-btn class="panel-button login">Login</q-btn>
    </div>
    <q-btn class="panel-button request">Request custom data</q-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppUserPanel',
});
</script>

<style lang="sass" scoped>
.app-user-panel
  display: flex
  flex-direction: column
  width: 100%
.app-user-panel-top
  display: flex
  flex-direction: row
  justify-content: space-between
  margin-bottom: 12px
  .panel-button
    width: 48%
</style>
