<template>
  <div class="checkbox" @click="active = !active">
    <div class="checkbox__inner" v-if="active"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref(false);
</script>

<style scoped lang="scss">
.checkbox {
  width: 16px;
  height: 16px;

  border: 2px solid #016ae7;
  border-radius: 4px;

  padding: 2px;

  &__inner {
    width: 100%;
    height: 100%;
    background: #016ae7;
    border-radius: 2px;
  }

  cursor: pointer;
}
</style>
