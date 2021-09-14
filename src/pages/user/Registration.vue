<template>
  <div class="row justify-center">
    <div class="col-md-none">
      <RegistrationForm />
    </div>
  </div>
</template>

<script>
import RegistrationForm from 'components/User/RegistrationForm';

export default {
  name: 'Registration',
  components: { RegistrationForm },
};
</script>
