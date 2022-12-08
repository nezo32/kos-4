<template>
  <div class="university__logo">
    <svg
      v-if="props.type == 'large'"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.2867 67.9728V53.3319L46.4023 44.8516L33.6729 52.1347L61.2867 67.9728Z"
        fill="#0074FC"
      />
      <path
        d="M46.4014 44.8518L61.2859 36.3216L46.4014 27.8164V44.8518Z"
        fill="#0074FC"
      />
      <path
        d="M33.6725 20.5575L18.7129 12.0273V60.7141L33.6725 52.1341V20.5575Z"
        fill="#0074FC"
      />
    </svg>
    <svg
      v-if="props.type == 'small'"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3214 16.9932V13.333L11.6003 11.2129L8.41797 13.0337L15.3214 16.9932Z"
        fill="#0074FC"
      />
      <path
        d="M11.6006 11.212L15.3217 9.07943L11.6006 6.95312V11.212Z"
        fill="#0074FC"
      />
      <path
        d="M8.41863 5.13841L4.67871 3.00586V15.1775L8.41863 13.0325V5.13841Z"
        fill="#0074FC"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ type: "large" | "small" }>();
</script>

<style scoped lang="scss"></style>
