<template>
  <q-page class="row justify-center">
    <div class="col-lg-3 col-md-6 col-xs-11">
      <LoginForm />
    </div>
  </q-page>
</template>

<script>
import LoginForm from 'components/User/LoginForm';

export default {
  name: 'PageLogin',
  components: { LoginForm },
};
</script>
