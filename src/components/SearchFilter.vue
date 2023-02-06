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
      <span
        v-for="(v, i) of cont"
        :key="i"
        @click="
          value = v;
          active = !active;
        "
      >
        {{ v }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect, ref, watch } from "vue";
import SearchIcon from "./icons/filters/SearchIcon.vue";
import useDetectOutsideElementClick from "@/detectOutsideElement";

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
    width: fit-content;

    max-width: 512px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    position: absolute;
    top: 64px;
    left: -15px;

    z-index: 100;

    background: #ffffff;
    box-shadow: 3px 3px 16px #eaedf3;
    border-radius: 10px;

    padding: 15px;
    > span {
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

      &:hover {
        background: #f4f7fe;
        border-radius: 5px;
      }
    }
  }
}
</style>
