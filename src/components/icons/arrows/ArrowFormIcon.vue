<template>
  <div
    class="arrow__form__page__icon"
    :class="ArrowDirections[props.direciton]"
  >
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4816 12.6988L11.1141 6.34254C11.0095 6.23709 10.8851 6.1534 10.748 6.09629C10.6109 6.03917 10.4639 6.00977 10.3153 6.00977C10.1668 6.00977 10.0198 6.03917 9.8827 6.09629C9.7456 6.1534 9.62118 6.23709 9.51659 6.34254C9.30706 6.55332 9.18945 6.83845 9.18945 7.13566C9.18945 7.43287 9.30706 7.71801 9.51659 7.92879L15.0853 13.5538L9.51659 19.1225C9.30706 19.3333 9.18945 19.6185 9.18945 19.9157C9.18945 20.2129 9.30706 20.498 9.51659 20.7088C9.62079 20.8151 9.74504 20.8997 9.88215 20.9576C10.0193 21.0155 10.1665 21.0457 10.3153 21.0463C10.4642 21.0457 10.6114 21.0155 10.7485 20.9576C10.8857 20.8997 11.0099 20.8151 11.1141 20.7088L17.4816 14.3525C17.5958 14.2472 17.6869 14.1193 17.7493 13.977C17.8116 13.8347 17.8438 13.681 17.8438 13.5257C17.8438 13.3703 17.8116 13.2166 17.7493 13.0743C17.6869 12.932 17.5958 12.8041 17.4816 12.6988Z"
        fill="currentColor"
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
.up {
  transform: rotateZ(-90deg);
}
.left {
  transform: rotateZ(180deg);
}

.arrow__form__page__icon {
  font-size: 0;
  cursor: pointer;
}
</style>
