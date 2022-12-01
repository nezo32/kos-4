<template>
  <div class="custom__input" :class="objectStyleAll">
    <input
      type="text"
      @focusin="
        objectStyleAll.blue = true;
        objectStyleAll.pos = true;
      "
      @focusout="objectStyleAll.blue = false"
    />
    <span>{{ props.theme }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps<{
  theme: string;
}>();

const objectStyleAll = reactive({
  blue: false,
  pos: false,
});
</script>

<style scoped lang="scss">
.custom__input {
  &.blue {
    border: 1px solid #016ae7;
    > span {
      color: #016ae7 !important;
    }
  }
  &.pos {
    > span {
      left: 20px;
      top: -8px;

      color: #a3aed0;
      font-weight: 400;
      font-size: 10px;
      line-height: 140%;

      background: white;
    }
  }

  width: 370px;

  position: relative;

  border: 1px solid #a3aed0;
  border-radius: 10px;

  padding: 12px 15px 13px 15px;

  > input {
    width: 100%;

    background: transparent;
    border: none;

    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #000000;

    z-index: 1;

    &::placeholder {
      color: #a3aed0;
    }
  }

  > span {
    transition: all 0.5 ease-in-out;

    z-index: 0;

    left: 7px;
    top: 13px;

    padding: 0 10px;

    position: absolute;

    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #a3aed0;

    pointer-events: none;
  }
}
</style>
