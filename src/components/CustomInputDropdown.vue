<template>
  <div class="custom__input" :class="objectStyleAll" ref="container">
    <input type="text" @focusin="onFocusIn()" v-model="input" />

    <ArrowFormIcon
      @click=""
      :direciton="arrowDirection"
      style="color: var(--unactive-text); transition: all 0.2s ease-in-out"
      v-if="dropdown"
    />
    <span>{{ props.theme }}</span>
    <div
      class="custom__input__dropdown"
      v-if="arrowDirection == 1 && dropdown && cont?.length"
    >
      <span v-for="(v, i) of cont" :key="i" :title="v" @click="onFocusOut(v)">{{
        v
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";
import { ArrowDirections } from "@/types/types";
import ArrowFormIcon from "./icons/arrows/ArrowFormIcon.vue";
import useDetectOutsideElementClick from "@/detectOutsideElement";

const props = defineProps<{
  theme: string;
  dropdown?: boolean;
  content?: Array<string>;
  modelValue?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const cont = ref(props.content);
const container = ref();

const input = ref<string>();
const arrowDirection = ref<ArrowDirections>(ArrowDirections.right);

const objectStyleAll = reactive({
  blue: false,
  pos: false,
  red: false,
});

function onFocusIn() {
  objectStyleAll.blue = true;
  objectStyleAll.pos = true;
  arrowDirection.value = ArrowDirections.down;
}
function onFocusOut(v?: string) {
  input.value = v;
  objectStyleAll.blue = false;
  v === undefined || v === ""
    ? (objectStyleAll.pos = false)
    : (objectStyleAll.pos = true);
  if (v) {
    if (!props.content?.includes(v)) {
      objectStyleAll.red = true;
      value.value = "";
      if (v === "" || v === undefined) objectStyleAll.red = false;
    } else {
      objectStyleAll.red = false;
      value.value = v;
    }
  }
  arrowDirection.value = ArrowDirections.right;
}

useDetectOutsideElementClick(container, () => {
  if (props.dropdown) {
    onFocusOut(input.value);
  }
});

watch(input, async (n) => {
  cont.value = [];
  props.content?.forEach((el) => {
    if (n != undefined)
      if (el.toUpperCase().includes(n.toUpperCase())) cont.value?.push(el);
  });
});
</script>

<style scoped lang="scss">
.custom__input {
  &.blue {
    border: 1px solid var(--elements);
    > span {
      color: var(--elements) !important;
    }
  }
  &.red {
    border: 1px solid var(--rejected);
    > span {
      color: var(--rejected) !important;
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

  position: relative;

  border: 1px solid #a3aed0;
  border-radius: 10px;

  padding: 12px 15px 13px 15px;

  display: flex;
  flex-direction: row;

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

  &__dropdown {
    z-index: 100;

    width: 95%;
    position: absolute;

    top: 65px;
    left: 0;

    padding: 10px;
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
    border-radius: 10px;

    > span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      display: flex;
      flex-direction: column;
      gap: 5px;

      &:hover {
        background: #f4f7fe;
      }
      padding: 5px;
      border-radius: 5px;
    }
  }
}
</style>
