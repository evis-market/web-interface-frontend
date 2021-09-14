<template>
  <div class="row justify-center">
    <div class="col-4 col-md-none">
      <!-- <LoginForm /> -->
      <q-btn label="Go to Registration" color="primary" :to="{ name: 'registration' }"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
