<template>
  <q-list bordered padding class="rounded-borders text-primary q-mt-md q-ml-md">
    <q-item-label header>All categories</q-item-label>
    <q-item
      clickable
      v-ripple
      :active="link === 'inbox'"
      @click="link = 'inbox'"
      active-class="active-menu-link"
    >
      <q-item-section>Inbox</q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'outbox'"
      @click="link = 'outbox'"
      active-class="active-menu-link"
    >
      <q-item-section>Outbox</q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'trash'"
      @click="link = 'trash'"
      active-class="active-menu-link"
    >
      <q-item-section>Trash</q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'settings'"
      @click="link = 'settings'"
      active-class="active-menu-link"
    >
      <q-item-section>Settings</q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'help'"
      @click="link = 'help'"
      active-class="active-menu-link"
    >
      <q-item-section>Help</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'ProductsCategories',
  data() {
    return {
      link: 'inbox',
    };
  },
};
</script>

<style scoped>
  .active-menu-link {
    color: white;
    background: purple;
  }
</style>
