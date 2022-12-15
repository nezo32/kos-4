<template>
  <div class="status__choose" ref="outsideDetect">
    <div class="status__choose__header" @click="changeArrowDir()">
      <div>
        <span> {{ selected }}</span>
      </div>
      <ArrowListIcon :direciton="arrowDirection" />
    </div>
    <div class="status__choose__body" v-if="opened">
      <option
        v-for="status of props.statuses"
        @click="selectStatus(status.name)"
      >
        {{ status.name }}
      </option>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections } from "@/types/types";
import type { ProfileStatus } from "@/types/types";
import { onMounted, ref } from "vue";

import ArrowListIcon from "@/components/icons/arrows/ArrowListIcon.vue";

import detect from "@/detectOutsideElement";

const props = defineProps({
  statuses: Array<ProfileStatus>,
});

const arrowDirection = ref<ArrowDirections>(ArrowDirections.right);

const opened = ref<Boolean>(false);
const selected = ref<String>("");
const outsideDetect = ref();

detect(outsideDetect, () => {
  if (opened.value) opened.value = !opened.value;
});

function changeArrowDir() {
  arrowDirection.value == ArrowDirections.right
    ? (arrowDirection.value = ArrowDirections.down)
    : (arrowDirection.value = ArrowDirections.right);

  opened.value = !opened.value;
}

function selectStatus(name: string) {
  selected.value = name;
  opened.value = !opened.value;
}

onMounted(() => {
  if (props.statuses) {
    selected.value = props.statuses[0].name;
    props.statuses.forEach((el) => {
      if (el.default) {
        selected.value = el.name;
      }
    });
  } else {
    selected.value = "undefined";
  }
});
</script>

<style scoped lang="scss">
.status__choose {
  position: relative;

  &__header {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 5px;

    > div {
      > span {
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #016ae7;
      }
    }
  }
  &__body {
    top: 30px;

    padding: 11px 0;

    position: absolute;
    display: flex;

    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
    border-radius: 10px;

    flex-direction: column;
    gap: 6px;

    > option {
      padding: 1px 27px 1px 5px;

      cursor: pointer;

      &:hover {
        background: #f4f7fe;
      }

      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      color: #016ae7;
    }
  }
}
</style>
