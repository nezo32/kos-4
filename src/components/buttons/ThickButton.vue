<template>
  <div class="thick__button">
    <button>{{ props.content }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>

<style scoped lang="scss">
.thick__button {
  > button {
    padding: 15px 34px 15px 33px;

    background: #016ae7;
    border-radius: 16px;
    border: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;

    cursor: pointer;

    &:hover {
      filter: drop-shadow(2px 2px 6px rgba(11, 20, 64, 0.2));
    }
  }
}
</style>
