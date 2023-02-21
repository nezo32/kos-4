<template>
  <div class="search__filter" ref="container">
    <div
      class="search__filter__header"
      :class="{ disabled }"
      @click="active = true"
    >
      <input
        type="text"
        :placeholder="title || 'Поиск'"
        v-model="value"
        :title="value"
      />
      <SearchIcon />
    </div>
    <div class="search__filter__after" v-if="content && active && cont.length">
      <div class="search__filter__after__wrapper">
        <template v-for="(v, i) of cont" :key="i">
          <span
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
import { computed, watchEffect, ref, watch, onMounted } from "vue";
import SearchIcon from "./icons/filters/SearchIcon.vue";
import useDetectOutsideElementClick from "@/detectOutsideElement";

const selected = ref(-1);

function keys() {
  document.addEventListener("keydown", (e) => {
    if (active.value && cont.value.length) {
      if (e.key === "Enter") {
        const elems = document.querySelectorAll(
          ".search__filter__after__wrapper__elem"
        );
        value.value = elems[selected.value].textContent || "";
        active.value = false;
      }
      if (e.key === "ArrowDown") {
        const elems = document.querySelectorAll(
          ".search__filter__after__wrapper__elem"
        );
        if (selected.value < cont.value.length - 1) selected.value++;
        if (selected.value > 4) {
          const wrapper = document.querySelector(
            ".search__filter__after__wrapper"
          );
          wrapper?.scrollBy(0, 31);
        }
        elems.forEach((v) => v.classList.remove("hover"));
        elems[selected.value].classList.add("hover");
        const elem = elems[selected.value] as HTMLElement;
        elem.focus();
      }
      if (e.key === "ArrowUp") {
        const elems = document.querySelectorAll(
          ".search__filter__after__wrapper__elem"
        );
        if (selected.value > 0) selected.value--;
        if (selected.value < cont.value.length - 4) {
          const wrapper = document.querySelector(
            ".search__filter__after__wrapper"
          );
          wrapper?.scrollBy(0, -31);
        }
        elems.forEach((v) => v.classList.remove("hover"));
        elems[selected.value].classList.add("hover");
        const elem = elems[selected.value] as HTMLElement;
        elem.focus();
      }
    }
  });
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

onMounted(() => {
  keys();
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

    > input {
      cursor: pointer;

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
