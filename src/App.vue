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

<style lang="scss">
@import "@/assets/sass/global.scss";
.app {
  margin: 0 auto;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
}
</style>
