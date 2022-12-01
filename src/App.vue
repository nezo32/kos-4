<template>
  <div class="app viewpoint">
    <div>
      <RouterView />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
</script>

<style scoped lang="scss">
.app {
  margin: 0 auto;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
  .viewpoint {
  }
}
</style>
