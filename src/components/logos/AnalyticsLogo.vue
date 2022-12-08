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
      <circle
        cx="20.9385"
        cy="60.1426"
        r="7.5"
        fill="url(#paint0_linear_381_33718)"
      />
      <rect
        x="35.4385"
        y="28.6426"
        width="12"
        height="39"
        rx="6"
        fill="url(#paint1_linear_381_33718)"
      />
      <rect
        x="54.4385"
        y="12.3574"
        width="12.1224"
        height="55.102"
        rx="6.06122"
        fill="url(#paint2_linear_381_33718)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_381_33718"
          x1="13.5745"
          y1="66.2086"
          x2="23.9466"
          y2="45.401"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#004CA6" />
          <stop offset="0.0670179" stop-color="#0055B8" />
          <stop offset="0.1814" stop-color="#0060D1" />
          <stop offset="0.3101" stop-color="#0069E4" />
          <stop offset="0.4591" stop-color="#006FF2" />
          <stop offset="0.6471" stop-color="#0073FA" />
          <stop offset="1" stop-color="#0074FC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_381_33718"
          x1="35.5473"
          y1="63.9143"
          x2="65.7365"
          y2="45.2795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#004CA6" />
          <stop offset="0.0670179" stop-color="#0055B8" />
          <stop offset="0.1814" stop-color="#0060D1" />
          <stop offset="0.3101" stop-color="#0069E4" />
          <stop offset="0.4591" stop-color="#006FF2" />
          <stop offset="0.6471" stop-color="#0073FA" />
          <stop offset="1" stop-color="#0074FC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_381_33718"
          x1="54.5484"
          y1="62.1918"
          x2="89.7992"
          y2="46.634"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#004CA6" />
          <stop offset="0.0670179" stop-color="#0055B8" />
          <stop offset="0.1814" stop-color="#0060D1" />
          <stop offset="0.3101" stop-color="#0069E4" />
          <stop offset="0.4591" stop-color="#006FF2" />
          <stop offset="0.6471" stop-color="#0073FA" />
          <stop offset="1" stop-color="#0074FC" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      v-if="props.type == 'small'"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5.23438"
        cy="15.0352"
        r="1.875"
        fill="url(#paint0_linear_442_25333)"
      />
      <rect
        x="8.85938"
        y="7.16016"
        width="3"
        height="9.75"
        rx="1.5"
        fill="url(#paint1_linear_442_25333)"
      />
      <rect
        x="13.6094"
        y="3.08984"
        width="3.03061"
        height="13.7755"
        rx="1.51531"
        fill="url(#paint2_linear_442_25333)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_442_25333"
          x1="3.39339"
          y1="16.5517"
          x2="5.98641"
          y2="11.3498"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#004CA6" />
          <stop offset="0.0670179" stop-color="#0055B8" />
          <stop offset="0.1814" stop-color="#0060D1" />
          <stop offset="0.3101" stop-color="#0069E4" />
          <stop offset="0.4591" stop-color="#006FF2" />
          <stop offset="0.6471" stop-color="#0073FA" />
          <stop offset="1" stop-color="#0074FC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_442_25333"
          x1="8.88659"
          y1="15.9781"
          x2="16.4339"
          y2="11.3194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#004CA6" />
          <stop offset="0.0670179" stop-color="#0055B8" />
          <stop offset="0.1814" stop-color="#0060D1" />
          <stop offset="0.3101" stop-color="#0069E4" />
          <stop offset="0.4591" stop-color="#006FF2" />
          <stop offset="0.6471" stop-color="#0073FA" />
          <stop offset="1" stop-color="#0074FC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_442_25333"
          x1="13.6369"
          y1="15.5484"
          x2="22.4496"
          y2="11.659"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#004CA6" />
          <stop offset="0.0670179" stop-color="#0055B8" />
          <stop offset="0.1814" stop-color="#0060D1" />
          <stop offset="0.3101" stop-color="#0069E4" />
          <stop offset="0.4591" stop-color="#006FF2" />
          <stop offset="0.6471" stop-color="#0073FA" />
          <stop offset="1" stop-color="#0074FC" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ type: "large" | "small" }>();
</script>

<style scoped lang="scss"></style>
