<template>
  <div class="file__drop-down" ref="outsideDetectionComponent">
    <div class="file__drop-down__button" @click="active = !active">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
          fill="#016AE7"
        />
      </svg>
    </div>
    <div class="file__drop-down__content" v-if="active">
      <FileButton content="Редактировать" @click="active = !active" />
      <FileButton content="Скачать список Xlsx" @click="active = !active" />
      <FileButton content="Скачать файлы PDF" @click="active = !active" />
      <FileButton content="Скачать файлы WORD" @click="active = !active" />
      <FileButton content="Проверено" @click="active = !active" />
      <FileButton content="Отклонено" @click="active = !active" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FileButton from "./buttons/FileButton.vue";
import detect from "@/detectOutsideElement";

const active = ref(false);
const outsideDetectionComponent = ref();

detect(outsideDetectionComponent, () => {
  if (active.value) active.value = !active.value;
});
</script>

<style scoped lang="scss">
.file__drop-down {
  position: relative;
  &__button {
    padding: 8px;
    background: #f4f7fe;
    border-radius: 10px;
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
