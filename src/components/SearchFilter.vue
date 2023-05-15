<template>
  <div class="search__filter" ref="container">
    <div
      class="search__filter__header"
      :class="{ disabled }"
      @click="filterClick()"
    >
      <input
        ref="textInput"
        @keydown.down.prevent="keyDown"
        @keydown.up.prevent="keyUp"
        @keydown.enter.prevent="keyEnter"
        type="text"
        :placeholder="title || 'Поиск'"
        v-model="value"
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

function filterClick() {
  if (props.disabled) return;
  active.value = true;
  cont.value.splice(0, cont.value.length);
  if (props.content) cont.value.push(...props.content);
  textInput.value.focus();
}

const textInput = ref();
const selected = ref(-1);
const wrap = ref<HTMLElement | null>();
const elem = ref<Array<HTMLElement>>([]);

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
const cont = ref([...(props.content || [])]);

watch(value, async (n) => {
  cont.value = [];
  props.content?.forEach((el) => {
    if (n != undefined)
      if (el.toUpperCase().includes(n.toUpperCase())) cont.value.push(el);
  });
});

watchEffect(() => {
  props.trigger ? (value.value = "") : (value.value = "");
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
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
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
