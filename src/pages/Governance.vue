<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <TabMenu tab="governance"/>
    </div>
    [Governance content]
  </div>
</template>

<script>
import TabMenu from '../components/AppLayout/TabMenu';

export default {
  name: 'PageGovernance',
  data() {
    return {
      tab: 'governance',
    };
  },
  components: {
    TabMenu,
  },
};
</script>
