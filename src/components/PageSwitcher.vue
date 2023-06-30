<template>
  <div class="page__switcher">
    <ArrowSwipePagesIcon
      :direciton="ArrowDirections.left"
      @click="changePage(-1)"
    />
    <ins ref="pages" v-if="countPages < 10">
      <template v-for="i in props.countPages" :key="i">
        <p :selected="selectedPage == i" @click="selectedPage = i">
          <span>{{ i }}</span>
        </p>
        <p v-if="false" style="color: var(--unactive-text)">...</p>
      </template>
    </ins>
    <ins ref="pages" v-else>
      <template v-for="i in props.countPages" :key="i">
        <p
          :selected="selectedPage == i"
          @click="selectedPage = i"
          v-if="
            (selectedPage < 5 && (i < 5 || i > props.countPages - 2)) ||
            (selectedPage > props.countPages - 4 &&
              (i < 3 || i > props.countPages - 4)) ||
            ((selectedPage >= 4 || selectedPage <= props.countPages - 4) &&
              (i == selectedPage + 1 ||
                i == selectedPage ||
                i == selectedPage - 1 ||
                i < 3 ||
                i > props.countPages - 2))
          "
        >
          <span>{{ i }}</span>
        </p>
        <p
          v-if="
            (selectedPage > props.countPages - 4 && i == 5) ||
            (selectedPage < 5 && i == props.countPages - 3) ||
            (selectedPage >= 5 &&
              selectedPage <= props.countPages - 4 &&
              (i == selectedPage + 1 || i == selectedPage - 2))
          "
          style="color: var(--unactive-text)"
        >
          ...
        </p>
      </template>
    </ins>
    <ArrowSwipePagesIcon
      :direciton="ArrowDirections.right"
      @click="changePage(1)"
    />
  </div>
</template>

<script setup lang="ts">
/*  */

/*  */

import { ArrowDirections } from "@/@types";
import { ref, watch } from "vue";
import ArrowSwipePagesIcon from "./icons/arrows/ArrowSwipePagesIcon.vue";

const props = defineProps<{
  countPages: number;
}>();
const emit = defineEmits<{
  (event: "switch", to: number): void;
}>();

const pages = ref<HTMLDivElement | null>(null);
const selectedPage = ref(1);

function changePage(i: number) {
  if (selectedPage.value + i > props.countPages || selectedPage.value + i < 1)
    return;

  selectedPage.value += i;
}

watch(selectedPage, (n) => {
  emit("switch", n);
});
</script>

<style scoped lang="scss">
.page__switcher {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  > ins {
    display: flex;
    flex-direction: row;
    gap: 10px;

    text-decoration: none;

    > p {
      width: 16px;

      &[selected="true"] {
        > span {
          color: #016ae7 !important;
        }
      }

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 7px;

      > div {
        color: #a3aed0;
      }

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      text-align: center;
      > span {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #a3aed0;
      }
      &:hover,
      &.hover {
        > span {
          color: #2b3674;
        }
      }

      cursor: pointer;
    }
  }
}
</style>
