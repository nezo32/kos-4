<template>
  <div class="app">
    <div class="viewpoint">
      <RouterView />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from "./components/BreadCrumbs.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
@import "@/assets/sass/global.scss";
.app {
  display: flex;
  flex-direction: column;
}
.viewpoint {
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.footer {
  background-color: var(--white);
  width: 100%;
}

body {
  background: var(--grey);
}
</style>
