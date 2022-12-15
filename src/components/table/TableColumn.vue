<template>
  <div class="table__column">
    <div class="table__column__head">
      <p>{{ header }}</p>
      <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
    </div>
    <div class="table__column__body">
      <p v-for="i in 10" :key="i">{{ i }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowSwipePagesIcon from "@/components/icons/arrows/ArrowSwipePagesIcon.vue";
import { ArrowDirections } from "@/types/types";

const props = defineProps<{
  header: string;
}>();
</script>

<style scoped lang="scss">
.table__column {
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__head {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    > p {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #a3aed0;
      margin: 0;
    }
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    > p {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #2b3674;
      margin: 0;
    }
  }
}
</style>
