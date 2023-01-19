<template>
  <div class="search__filter">
    <div class="search__filter__header" :class="{ disabled }">
      <input type="text" :placeholder="title || 'Поиск'" v-model="value" />
      <SearchIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from "vue";
import SearchIcon from "./icons/filters/SearchIcon.vue";

const props = defineProps<{
  modelValue?: any;
  radius?: "10" | "20";
  title?: string;
  trigger?: boolean;
  disabled?: boolean;
}>();
const emits = defineEmits(["update:modelValue"]);

const borderRadius = computed(() => (props.radius || "10") + "px");

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

watchEffect(() => {
  props.trigger ? (value.value = "") : (value.value = "");
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
    gap: 15px;
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
}
</style>
