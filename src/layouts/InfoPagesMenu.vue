<template>
  <div class="info-pages-menu" :class="[{ vertical }]">
    <BaseLink class="menu-link" :to="{ name: 'whitePaper' }">
      White Paper
    </BaseLink>
    <BaseLink class="menu-link" :to="{ name: 'tokenomics' }">
      Tokenomics
    </BaseLink>
    <BaseLink class="menu-link" :to="{ name: 'solutions' }">
      Solutions
    </BaseLink>
    <BaseLink class="menu-link" :to="{ name: 'teams' }">
      Teams
    </BaseLink>
    <BaseLink class="menu-link" :to="{ name: 'faq' }">
      FAQ
    </BaseLink>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import BaseLink from 'src/common-components/BaseLink/BaseLink';

export default defineComponent({
  name: 'InfoPagesMenu',

  components: {
    BaseLink,
  },

  props: {
    // Вызовите <InfoPagesMenu vertical /> чтобы создать вертикальное меню
    // * задел для использования в мобильном лайауте
    vertical: Boolean,
  },
});
</script>

<style lang="sass" scoped>
.info-pages-menu
  display: flex
  flex-direction: row
  justify-content: space-between
  &.vertical
    flex-direction: column

.menu-link
  display: flex
  font-size: 18px
</style>
