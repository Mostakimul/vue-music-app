<template>
  <TheNavbar />
  <div class="conatier">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
.conatier {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}
</style>
