<template>
  <div class="file__button">{{ props.content }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>

<style scoped lang="scss">
.file__button {
  width: 182px;
  padding: 3px 5px 3px 10px;

  cursor: pointer;

  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #2b3674;

  &:hover {
    background: #f4f7fe;
    border-radius: 5px;
  }
}
</style>
