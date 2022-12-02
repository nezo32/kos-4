<template>
  <div class="document__status">
    <span>{{ props.status }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: string;
}>();
</script>

<style scoped lang="scss">
.document__status {
  min-width: 125px;

  padding: 12px 17.5px;

  background: #f4f7fe;
  border-radius: 10px;

  text-align: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #2b3674;
  }
}
</style>
