<template>
  <div class="checkbox__rounded" :class="{ small: props!.small }">
    <div class="checkbox__rounded__inner" v-if="active == true" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ small?: boolean; active?: boolean }>();
</script>

<style scoped lang="scss">
.checkbox__rounded {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 50%;
  border: 2px solid #016ae7;

  width: 16px;
  height: 16px;

  padding: 2px;

  > div {
    flex-shrink: 0;

    width: 100%;
    height: 100%;

    background: #016ae7;
    border-radius: 50%;
  }

  &.small {
    width: 12px;
    height: 12px;
    border: 2px solid #016ae7;

    padding: 2px;
  }
}
</style>
