<template>
  <router-link
    v-if="to"
    v-bind="$attrs"
    :to="to"
    class="link"
  >
    <slot />
  </router-link>
  <a
    v-else
    v-bind="$attrs"
    class="link"
    :class="[{ 'link-active': isActiveLink }]"
  >
    <slot />
  </a>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLink',
  inheritAttrs: false,
  props: {
    to: Object,
    isActiveLink: Boolean,
  },
});
</script>

<style lang="sass" scoped>
.link
  font-weight: 500
  text-decoration: none
  transition: color 0.3s ease
  color: $primary

  &:hover
    color: $accent

  &.router-link-active,
  &.link-active
    color: $accent
</style>
