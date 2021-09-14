<template>
  <q-page class="row justify-center">
    <div class="col-lg-3 col-md-6 col-xs-11">
      <SignupForm />
    </div>
  </q-page>
</template>

<script>
import SignupForm from 'components/User/SignupForm';

export default {
  name: 'PageSignup',
  components: { SignupForm },
};
</script>
