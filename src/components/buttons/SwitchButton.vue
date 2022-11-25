<template>
  <div class="switch__button">
    <button
      :class="classObject"
      @click="classObject.active = !classObject.active"
    >
      {{ props.content }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps<{
  content: String;
}>();

const classObject = reactive({
  active: false,
});
</script>

<style scoped lang="scss">
.switch__button {
  > .active {
    color: #ffffff !important;
    background: #016ae7 !important;
    border: 1px solid #016ae7;
  }

  > button {
    text-align: center;

    padding: 12px 51px 12px 52px;

    background: #f4f7fe;
    border-radius: 10px;
    border: 1px solid #f4f7fe;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #a3aed0;

    &:hover {
      border: 1px solid #016ae7;
    }

    cursor: pointer;
  }
}
</style>
