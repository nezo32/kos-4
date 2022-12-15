<template>
  <div class="table__fill__row">
    <div class="table__fill__row__inner" ref="rowInner"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const rowInner = ref<HTMLDivElement>();
const props = defineProps<{ procent: number }>();

watch(props, (el) => {
  if (!rowInner.value) return;
  rowInner.value.style.width = ((70 * el.procent) / 100).toString() + "px";
});

onMounted(() => {
  if (!rowInner.value) return;
  rowInner.value.style.width = ((70 * props.procent) / 100).toString() + "px";
});
</script>

<style scoped lang="scss">
.table__fill__row {
  width: 70px;
  height: 8px;
  background: #f4f7fe;
  border-radius: 21px;
  &__inner {
    height: 8px;
    max-width: 70px;
    background: #016ae7;
    border-radius: 21px;
  }
}
</style>
