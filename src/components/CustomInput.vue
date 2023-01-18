<template>
  <div class="custom__input" :class="objectStyleAll">
    <input
      :class="{ footer__feedback__style: props.footer }"
      type="text"
      @focusin="onFocusIn()"
      v-model="input"
      @focusout="onFocusOut()"
    />
    <CalendarIcon v-if="date" style="color: var(--unactive-text)" />
    <span>{{ props.theme }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import CalendarIcon from "./icons/CalendarIcon.vue";

const props = defineProps<{
  theme: string;
  footer?: boolean;
  date?: boolean;
  modelValue?: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const input = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const objectStyleAll = reactive({
  blue: false,
  pos: false,
});

function onFocusIn() {
  objectStyleAll.blue = true;
  objectStyleAll.pos = true;
}
function onFocusOut() {
  objectStyleAll.blue = false;
  input.value == "" || input.value == undefined
    ? (objectStyleAll.pos = false)
    : (objectStyleAll.pos = true);
}
</script>

<style scoped lang="scss">
.custom__input {
  display: flex;
  flex-direction: row;
  align-items: center;

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
      font-size: 12px;
      line-height: 140%;

      background: white;
    }
  }

  width: 100%;

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

    &.footer__feedback__style {
      font-weight: 300;
      font-size: 18px;
      line-height: 140%;
    }
  }

  > span {
    transition: all 0.1s ease-in-out;

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
