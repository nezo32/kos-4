<template>
  <div class="custom__input__dropdown" ref="container">
    <div class="custom__input__dropdown__input" :class="objectStyleAll">
      <input
        @keydown.down.prevent="keyDown"
        @keydown.up.prevent="keyUp"
        @keydown.enter.prevent="keyEnter"
        type="text"
        v-model="input"
        ref="inputComponent"
        @click="onFocusIn()"
      />

      <ArrowFormIcon
        @click="arrowDirection == 1 ? onFocusOut(input) : onFocusIn()"
        :direciton="arrowDirection"
        style="color: var(--unactive-text); transition: all 0.2s ease-in-out"
        v-if="dropdown"
      />
      <span>{{ props.theme }}</span>
    </div>
    <div class="custom__input__dropdown__dropdown" v-if="active">
      <div class="custom__input__dropdown__dropdown__wrapper" ref="wrap">
        <template v-for="(v, i) of cont" :key="i">
          <span
            :title="v"
            ref="elem"
            @click="onFocusOut(v)"
            class="forms__text"
            >{{ v }}</span
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch, onMounted, defineProps } from "vue";
import { ArrowDirections } from "@/types/types";
import ArrowFormIcon from "./icons/arrows/ArrowFormIcon.vue";
import useDetectOutsideElementClick from "@/detectOutsideElement";

const props = defineProps<{
  theme: string;
  dropdown?: boolean;
  content?: string[];
  modelValue?: string;
  isOpened?: boolean;
}>();
const emit = defineEmits(["update:model-value", "update:isOpened"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:model-value", value);
  },
});

const selected = ref(-1);
const wrap = ref();
const elem = ref<Array<HTMLElement>>([]);

function keyDown() {
  if (!(active.value && props.content && cont.value.length && wrap.value))
    return;
  if (selected.value < cont.value.length - 1) selected.value++;
  elem.value.forEach((el) => el.classList.remove("hover"));
  elem.value[selected.value].classList.add("hover");
  if (selected.value > 4) {
    wrap.value.scrollBy(0, 35.1);
  }
}

function keyUp() {
  if (!(active.value && props.content && cont.value.length && wrap.value))
    return;
  if (selected.value > 0) selected.value--;
  elem.value.forEach((el) => el.classList.remove("hover"));
  elem.value[selected.value].classList.add("hover");
  if (selected.value < cont.value.length - 4) {
    wrap.value.scrollBy(0, -35.1);
  }
}

function keyEnter() {
  if (!(active.value && props.content && cont.value.length && wrap.value))
    return;
  value.value = elem.value[selected.value].textContent || "";
  input.value = elem.value[selected.value].textContent || "";
  arrowDirection.value = ArrowDirections.right;
  selected.value = -1;
}

const height = computed(() => {
  if ((cont.value?.length || 0) < 5) {
    return `${((cont.value?.length || 0) - 1) * 35.1 + 35.1}px`;
  } else return `${4 * 35.1 + 35.1}px`;
});

const cont = computed(() => {
  const temp: string[] = [];
  for (const v of props.content || []) {
    if (v.includes(input.value)) {
      temp.push(v);
    }
  }
  return temp;
});
const container = ref();

const input = ref<string>("");
const inputComponent = ref<HTMLElement>();
const arrowDirection = ref<ArrowDirections>(ArrowDirections.right);

const objectStyleAll = reactive({
  blue: false,
  pos: false,
  red: false,
});

function onFocusIn() {
  objectStyleAll.blue = true;
  objectStyleAll.pos = true;
  inputComponent.value?.focus();
  arrowDirection.value = ArrowDirections.down;
}
function onFocusOut(v?: string) {
  input.value = v || "";
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
  } else {
    value.value = "";
    objectStyleAll.red = false;
  }
  arrowDirection.value = ArrowDirections.right;
}

useDetectOutsideElementClick(container, () => {
  onFocusOut(input.value);
});

/* watch(input, (n) => {
  cont.value?.splice(0, cont.value.length);
  props.content?.forEach((el) => {
    if (n != undefined)
      if (el.toUpperCase().includes(n.toUpperCase())) cont.value?.push(el);
  });
}); */

const active = computed(() =>
  arrowDirection.value == 1 && props.dropdown && cont.value?.length
    ? true
    : false
);

watch(active, (n) => {
  emit("update:isOpened", n);
});

onMounted(() => {
  input.value = value.value || "";
  onFocusOut(input.value);
});
</script>

<style scoped lang="scss">
.custom__input__dropdown {
  &__input {
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

    border: 1px solid #a3aed0;
    border-radius: 10px;

    padding: 12px 15px 13px 15px;

    display: flex;
    flex-direction: row;
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
  }

  position: relative;

  &__dropdown {
    z-index: 100;

    width: 95%;
    position: absolute;

    top: 65px;
    left: 0;

    padding: 10px 5px 10px 10px;

    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
    border-radius: 10px;

    &__wrapper {
      padding-right: 5px;

      overflow: auto;
      max-height: v-bind(height);

      &::-webkit-scrollbar {
        width: 5px;
        /* width of the entire scrollbar */
      }

      &::-webkit-scrollbar-track {
        background: #f4f7fe;
        border-radius: 31px;
        /* color of the tracking area */
      }

      &::-webkit-scrollbar-thumb {
        background-color: #a3aed0;
        border-radius: 22px;
        /* color of the scroll thumb */
      }

      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        display: flex;
        flex-direction: column;
        gap: 5px;

        &:hover,
        &.hover {
          background: #f4f7fe;
        }
        padding: 5px;
        border-radius: 5px;
      }
    }
  }
}
</style>
