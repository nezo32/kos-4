<template>
  <div class="table">
    <div class="table__head">
      <h3 class="table-card__header">{{ title }}</h3>
      <section>
        <SearchFilter />
        <FileDropDown :content="dropdownParams" />
      </section>
    </div>
    <div class="table__body">
      <div
        class="table__body__column"
        v-for="(header, index) of headers"
        :key="index"
      >
        <section class="breadcrumbs__text">
          {{ header }}
          <ArrowSwipePagesIcon
            :direciton="arrowdirection[index]"
            @click="sort(index)"
          />
        </section>
        <p
          class="table__text"
          :title="v[index]"
          v-for="(v, i) of sortingContent"
          :key="i"
          :class="{ excellent: v[index] == '100%' }"
          @click="router.push(props.ids?.get(v) || '')"
        >
          {{ v[index] }}
        </p>
      </div>
    </div>
    <div class="table__foot">
      <PageSwitcher :count-pages="props.pages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections } from "@/@types";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import FileDropDown from "../FileDropDown.vue";
import ArrowSwipePagesIcon from "../icons/arrows/ArrowSwipePagesIcon.vue";
import PageSwitcher from "../PageSwitcher.vue";
import SearchFilter from "../SearchFilter.vue";

const router = useRouter();

const props = defineProps<{
  headers: string[];
  content: string[][];
  ids?: Map<string[], string>;
  title: string;
  dropdownParams: string[];
  pages: number;
}>();

const sortingContent = ref<Array<Array<string>>>(props.content);

const arrowdirection = ref<Array<ArrowDirections>>([]);
function sort(i: number) {
  arrowdirection.value = arrowdirection.value.map((el, index) => {
    return i != index ? ArrowDirections.down : el;
  });

  function cmp(a: string | number, b: string | number, down: 1 | -1) {
    if (a > b) {
      return 1 * down;
    }
    if (a < b) {
      return -1 * down;
    }
    return 0;
  }

  let x: number | string;
  let y: number | string;

  if (arrowdirection.value[i] == ArrowDirections.down) {
    arrowdirection.value[i] = ArrowDirections.up;
    sortingContent.value.sort((a, b) => {
      x = a[i].toUpperCase();
      y = b[i].toUpperCase();

      if (a[i].endsWith("%") && b[i].endsWith("%")) {
        x = Number(a[i].slice(0, a[i].length - 1));
        y = Number(b[i].slice(0, b[i].length - 1));
      }

      return cmp(x, y, -1);
    });
  } else {
    arrowdirection.value[i] = ArrowDirections.down;
    sortingContent.value.sort((a, b) => {
      x = a[i].toUpperCase();
      y = b[i].toUpperCase();

      if (a[i].endsWith("%") && b[i].endsWith("%")) {
        x = Number(a[i].slice(0, a[i].length - 1));
        y = Number(b[i].slice(0, b[i].length - 1));
      }
      return cmp(x, y, 1);
    });
  }
}

onMounted(() => {
  props.headers.forEach((el, i) => {
    arrowdirection.value.push(ArrowDirections.down);
  });

  sort(0);
});
</script>

<style scoped lang="scss">
.excellent {
  color: var(--resolved) !important;
}

.table {
  background-color: white;
  border-radius: 20px;
  padding: 20px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  &__head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > h3 {
      color: var(--main-text);
    }
    > section {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  }
  &__body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__column {
      display: flex;
      flex-direction: column;

      flex: none;
      order: 1;
      flex-grow: 1;

      max-width: 287.5px;

      > section {
        width: 100%;
        box-sizing: border-box;
        padding: 2px 0px 3px 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--unactive-text);
        border-bottom: 2px solid #f4f7fe;
        border-collapse: collapse;
      }
      > p {
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 15px 0px 5px 15px;
        color: var(--main-text);
      }
    }
  }
  &__foot {
    display: flex;
    justify-content: center;
    padding: 5px 0px;
  }
}
</style>
