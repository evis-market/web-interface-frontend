<template>
  <div class="row justify-between">
    <div v-for="i in 6" :key="i" class="col-6 q-gutter-lg q-mb-lg">
      <CategoryPreview />
    </div>
  </div>
</template>

<script>
import CategoryPreview from '../components/CategoryPreview';

export default {
  name: 'CategoriesPage',
  components: { CategoryPreview },
};
</script>
