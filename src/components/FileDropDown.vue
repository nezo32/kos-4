<template>
  <div class="file__drop-down" ref="outsideDetectionComponent">
    <div class="file__drop-down__button" @click="active = !active">
      <svg
        v-if="!small"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#F4F7FE" />
        <path
          d="M14 18C12.9 18 12 18.9 12 20C12 21.1 12.9 22 14 22C15.1 22 16 21.1 16 20C16 18.9 15.1 18 14 18ZM26 18C24.9 18 24 18.9 24 20C24 21.1 24.9 22 26 22C27.1 22 28 21.1 28 20C28 18.9 27.1 18 26 18ZM20 18C18.9 18 18 18.9 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18Z"
          fill="#016AE7"
        />
      </svg>

      <svg
        v-if="small"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="#F4F7FE" />
        <path
          d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
          fill="#016AE7"
        />
      </svg>
    </div>
    <div class="file__drop-down__content" v-if="active">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import detect from "@/detectOutsideElement";

const props = defineProps<{
  small?: boolean;
  modelValue?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const active = ref(false);
const outsideDetectionComponent = ref();

watch(active, (n) => {
  emit("update:modelValue", n);
});

detect(outsideDetectionComponent, () => {
  if (active.value) active.value = !active.value;
});
</script>

<style scoped lang="scss">
.file__drop-down {
  position: relative;
  &__button {
    font-size: 0;
    cursor: pointer;
  }
  &__content {
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
    border-radius: 10px;

    padding: 15px;

    z-index: 100;

    position: absolute;
    top: 50px;
    right: 0;
  }
}
</style>
