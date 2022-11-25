<template>
  <div class="breadcrumbs">
    <span v-for="element of path.split('/')">{{ element }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const path = ref("abiba/cringe/clown");
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  flex-direction: row;
  gap: 5px !important;

  & > span:nth-last-child(1) {
    &::after {
      padding-left: 0;
      content: "";
    }
  }

  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #a3aed0;

    &::after {
      padding-left: 5px;
      content: "/";
    }

    cursor: pointer;
  }

  &:hover {
    > span {
      color: #707eae;
    }
  }
}
</style>
