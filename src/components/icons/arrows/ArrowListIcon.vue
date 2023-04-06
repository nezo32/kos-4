<template>
  <div class="arrow__list__icon" :class="ArrowDirections[props.direciton]">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.21149 7.10635C9.49218 6.82566 9.94727 6.82566 10.228 7.10635L14.0613 10.9397C14.342 11.2204 14.342 11.6755 14.0613 11.9561L10.228 15.7895C9.94727 16.0702 9.49218 16.0702 9.21149 15.7895C8.9308 15.5088 8.9308 15.0537 9.21149 14.773L12.5366 11.4479L9.21149 8.12282C8.9308 7.84213 8.9308 7.38704 9.21149 7.10635Z"
        fill="#016AE7"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections } from "@/@types";

const props = defineProps<{
  direciton: ArrowDirections;
}>();
</script>

<style scoped lang="scss">
.down {
  transform: rotateZ(90deg);
}
.arrow__list__icon {
  cursor: pointer;
  font-size: 0;
}
</style>
