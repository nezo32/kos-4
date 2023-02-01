<template>
  <div class="checkbox__rounded">
    <svg
      v-if="!active && !small"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" stroke="#016AE7" stroke-width="2" />
    </svg>
    <svg
      v-if="active && !small"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_351_15802)">
        <circle cx="12" cy="12" r="11" stroke="#016AE7" stroke-width="2" />
        <circle cx="12" cy="12" r="8" fill="#016AE7" />
      </g>
      <defs>
        <clipPath id="clip0_351_15802">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      v-if="small && !active"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="8.25" stroke="#016AE7" stroke-width="1.5" />
    </svg>
    <svg
      v-if="small && active"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_428_20491)">
        <circle cx="9" cy="9" r="8.25" stroke="#016AE7" stroke-width="1.5" />
        <circle cx="9" cy="9" r="6" fill="#016AE7" />
      </g>
      <defs>
        <clipPath id="clip0_428_20491">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ small?: boolean; active?: boolean }>();
</script>

<style scoped lang="scss">
.checkbox__rounded {
  font-size: 0;
}
</style>
