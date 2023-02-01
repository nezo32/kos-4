<template>
  <div class="checkbox">
    <svg
      v-if="active == true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_321_14319)">
        <rect
          x="1"
          y="1"
          width="22"
          height="22"
          rx="3"
          stroke="#016AE7"
          stroke-width="2"
        />
        <rect x="4" y="4" width="16" height="16" rx="2" fill="#016AE7" />
      </g>
      <defs>
        <clipPath id="clip0_321_14319">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      v-if="active == false"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="3"
        stroke="#016AE7"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ active: boolean }>();
</script>

<style scoped lang="scss">
.checkbox {
  font-size: 0;
}
</style>
