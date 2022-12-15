<template>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.color == 'red'"
  >
    <circle cx="7" cy="7" r="7" fill="#F4F7FE" />
    <circle cx="7" cy="7" r="5" fill="#FF2D52" />
  </svg>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.color == 'green'"
  >
    <circle cx="7" cy="7" r="7" fill="#F4F7FE" />
    <circle cx="7" cy="7" r="5" fill="#21DC3F" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ color: "green" | "red" }>();
</script>

<style scoped lang="scss"></style>
