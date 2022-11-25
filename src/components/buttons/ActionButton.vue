<template>
  <div class="action__button">
    <button :class="{ small: smallStyle }">
      {{ props.content }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  small?: boolean;
  content: String;
}>();

const smallStyle = ref(false);

if (props.small) {
  smallStyle.value = true;
}
</script>

<style scoped lang="scss">
.small {
  padding: 3px 10px 3px 11px !important;
  border: 1px solid #016ae7 !important;
  border-radius: 10px !important;
}
.action__button {
  > button {
    text-align: center;

    padding: 12px 64px 12px 65px;
    border: 2px solid #016ae7;
    border-radius: 15px;
    background: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #016ae7;

    &:hover {
      background: #016ae7;
      color: white;
    }

    cursor: pointer;
  }
}
</style>
