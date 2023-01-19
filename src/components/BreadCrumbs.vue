<template>
  <div class="breadcrumbs">
    <span v-for="(element, index) of splittedPath" :key="index">
      <a :href="element">{{ element }}</a>
      <span v-if="index != splittedPath.length - 1">/</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ path?: string }>();

const path = ref<string>(props.path || "Главная/Расписание");

const splittedPath = path.value.split("/");
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  flex-direction: row;
  gap: 5px !important;

  > span {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    > span {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #a3aed0;
    }
  }

  span > a {
    max-width: 276px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #a3aed0;

    text-decoration: none;

    cursor: pointer;
    &:hover {
      color: #707eae;
    }
  }
}
</style>
