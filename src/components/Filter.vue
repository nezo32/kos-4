<template>
  <div class="filter" ref="outsideDetectionComponent">
    <div class="filter__header" @click="clicked = !clicked">
      <span>{{ selected }}</span>
      <FilterIcon v-if="!props.date" />
      <DatepickerIcon v-if="props.date" />
    </div>
    <div class="filter__after" v-if="clicked">
      <p
        v-for="i in props.content"
        :key="i"
        @click="
          selected = i;
          clicked = !clicked;
        "
      >
        {{ i }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DatepickerIcon from "./icons/filters/DatepickerIcon.vue";
import FilterIcon from "./icons/filters/FilterIcon.vue";
import detect from "@/detectOutsideElement";

const props = defineProps<{
  content: Array<string>;
  date?: boolean;
}>();

const selected = ref(props.content[0]);
const clicked = ref(false);
const outsideDetectionComponent = ref();

detect(outsideDetectionComponent, () => {
  if (clicked.value) clicked.value = !clicked.value;
});
</script>

<style scoped lang="scss">
.filter {
  position: relative;

  &__header {
    cursor: pointer;

    & > *:nth-child(2) {
      flex-shrink: 0;
    }
    & > *:nth-child(3) {
      flex-shrink: 0;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    background: #f4f7fe;
    border-radius: 20px;
    padding: 14px 12px;

    > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #a3aed0;
    }
  }
  &__after {
    width: fit-content;

    display: flex;
    flex-direction: column;
    gap: 5px;

    position: absolute;
    top: 80px;
    left: -15px;

    z-index: 100;

    background: #ffffff;
    border-radius: 10px;

    padding: 15px;
    > p {
      white-space: nowrap;

      cursor: pointer;

      padding: 5px 20px 5px 10px;

      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #2b3674;

      margin: 0;

      &:hover {
        background: #f4f7fe;
        border-radius: 5px;
      }
    }
  }
}
</style>
