<template>
  <q-page class="row justify-center" />
</template>

<script>
import LoginForm from 'components/User/LoginForm';
import { mapMutations } from 'vuex';

export default {
  name: 'PageLogin',
  components: { LoginForm },
  methods: {
    ...mapMutations('common', ['openSignInForm'])
  },
  mounted() {
    this.openSignInForm();
  }
};
</script>
