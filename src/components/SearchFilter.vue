<template>
  <div class="search__filter" ref="container">
    <div class="search__filter__header" :class="{ disabled }" @click="click">
      <input
        ref="inputElement"
        @keydown.down.prevent="keyDown"
        @keydown.up.prevent="keyUp"
        @keydown.enter.prevent="keyEnter"
        type="text"
        :placeholder="title || 'Поиск'"
        v-model="input"
        :title="value"
      />
      <SearchIcon />
    </div>
    <div class="search__filter__after" v-if="content && active && cont.length">
      <div class="search__filter__after__wrapper" ref="wrap">
        <template v-for="(v, i) of cont" :key="i">
          <span
            ref="elem"
            class="search__filter__after__wrapper__elem"
            @click="
              value = v;
              input = v;
              active = !active;
            "
            :title="v"
          >
            {{ v }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect, ref, watch } from "vue";
import SearchIcon from "./icons/filters/SearchIcon.vue";
import useDetectOutsideElementClick from "@/detectOutsideElement";

const selected = ref(-1);
const inputElement = ref<HTMLInputElement | null>();
const wrap = ref<HTMLElement | null>();
const elem = ref<Array<HTMLElement>>([]);
const input = ref<string>();

function click() {
  if (!props.disabled) {
    inputElement.value?.focus();
    active.value = true;
  } else {
    inputElement.value?.blur();
    active.value = false;
  }
}

function keyDown() {
  if (!(active.value && props.content && cont.value.length && wrap.value))
    return;
  if (selected.value < cont.value.length - 1) selected.value++;
  elem.value.forEach((el) => el.classList.remove("hover"));
  elem.value[selected.value].classList.add("hover");
  if (selected.value > 4) {
    wrap.value.scrollBy(0, 31);
  }
}

function keyUp() {
  if (!(active.value && props.content && cont.value.length && wrap.value))
    return;
  if (selected.value > 0) selected.value--;
  elem.value.forEach((el) => el.classList.remove("hover"));
  elem.value[selected.value].classList.add("hover");
  if (selected.value < cont.value.length - 4) {
    wrap.value.scrollBy(0, -31);
  }
}

function keyEnter() {
  if (!(active.value && props.content && cont.value.length && wrap.value))
    return;
  value.value = elem.value[selected.value].textContent || "";
  input.value = elem.value[selected.value].textContent || "";
  active.value = false;
}

const props = defineProps<{
  modelValue?: any;
  radius?: "10" | "20";
  title?: string;
  trigger?: boolean;
  disabled?: boolean;
  content?: Array<string>;
}>();
const emits = defineEmits(["update:modelValue"]);

const container = ref();
const active = ref(false);

const borderRadius = computed(() => (props.radius || "10") + "px");

const height = computed(() => {
  if (cont.value.length < 5) {
    return `${(cont.value.length - 1) * (26 + 5) + 26}px`;
  } else return `${4 * (26 + 5) + 26}px`;
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
const cont = ref(props.content || []);

watch(input, async (n) => {
  cont.value.splice(0, cont.value.length);
  props.content?.forEach((el) => {
    if (n != undefined)
      if (el.toUpperCase().includes(n.toUpperCase())) cont.value.push(el);
  });
  if (!props.content) return;
  if (!cont.value.length) {
    cont.value.push(...props.content);
  }
});

const triggerWatcher = computed(() => props.trigger);

watch(triggerWatcher, () => {
  if (input.value || value.value) {
    input.value = "";
    value.value = "";
    if (!props.content) return;
    cont.value.splice(0, cont.value.length);
    cont.value.push(...props.content);
  }
});

useDetectOutsideElementClick(container, () => {
  active.value = false;
});
</script>

<style scoped lang="scss">
.search__filter {
  position: relative;

  &__header {
    &.disabled {
      pointer-events: none;
    }

    & > *:nth-child(2) {
      flex-shrink: 0;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f4f7fe;
    border-radius: v-bind(borderRadius);
    padding: 12px;

    cursor: pointer;

    > input {
      width: 205px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #2b3674;

      border: none;
      background: transparent;

      &::placeholder {
        color: #a3aed0;
      }
    }
  }

  &__after {
    position: absolute;
    top: 64px;
    left: -15px;

    max-width: 512px;

    z-index: 100;

    background: #ffffff;
    box-shadow: 3px 3px 16px #eaedf3;
    border-radius: 10px;

    padding: 15px 5px 15px 15px;

    &__wrapper {
      padding-right: 10px;
      max-height: v-bind(height);
      overflow: auto;

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

      display: flex;
      flex-direction: column;
      gap: 5px;

      > span {
        flex-shrink: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        cursor: pointer;

        padding: 5px 20px 5px 10px;

        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #2b3674;

        margin: 0;

        &:hover,
        &.hover {
          background: #f4f7fe;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
