<template>
  <div class="table">
    <div class="table__head">
      <h3>
        <p class="table__text" v-if="subtitle">{{ subtitle }}</p>
        <h3 class="table-card__header">{{ title }}</h3>
      </h3>
      <section>
        <SearchFilter />
        <FileDropDown v-model="passer">
          <slot />
        </FileDropDown>
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
          :class="{
            excellent: v[index] == '100%' || v[index] == 'Проверен',
            red: v[index] == 'Отклонен',
            grey:
              v[index] == 'В разработке' ||
              v[index] == 'Отсутствует' ||
              v[index] == 'Не назначен',
              select: v[index] == 'Назначить',
          }"
          @click="(ev) => clickHandler(v, ev)"
        >
          <span v-if="v[index] != 'Назначить'">{{ v[index] }}</span>
          <div v-else @click="emit('select', v)">{{ v[index] }}</div>
        </p>
      </div>
    </div>
    <div class="table__foot">
      <PageSwitcher v-model:current-page="page" :count-pages="props.pages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections } from "@/@types";
import { ref, onMounted, computed } from "vue";
import FileDropDown from "../FileDropDown.vue";
import ArrowSwipePagesIcon from "../icons/arrows/ArrowSwipePagesIcon.vue";
import PageSwitcher from "../PageSwitcher.vue";
import SearchFilter from "../SearchFilter.vue";

const props = defineProps<{
  headers: string[];
  content: string[][];
  subtitle?: string;
  title: string;
  pages: number;

  currentPage: number;

  modelValue?: boolean;

  colSort?: {index: number, direction: "ascending" | "descending"};

  routingHandler?: (field: string[], event?: MouseEvent) => void;
}>();

const sortColumn = computed({
  get() {
    return props.colSort
  },
  set(v) {
    emit('update:colSort', v ? {index: v.index, direciton: v.direction} : undefined)
  }
})

const page = computed({
  get() {
    return props.currentPage
  },
  set(value) {
    emit('update:currentPage', value);
  }
})

const emit = defineEmits<{
  (event: 'select', data: string[]): void
  (event: 'update:modelValue', modelValue: boolean): void
  (event: 'update:currentPage', page: number): void
  (event: 'update:colSort', value?: {index: number, direciton: "ascending" | "descending"}): void
}>();

const passer = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value)
  },
});

function clickHandler(field: string[], event?: MouseEvent) {
  if (!props.routingHandler) return;
  props.routingHandler(field,event);
}

const sortingContent = ref<Array<Array<string>>>(props.content);

const arrowdirection = ref<Array<ArrowDirections>>([]);
function sort(i: number) {
  arrowdirection.value = arrowdirection.value.map((el, index) => {
    return i != index ? ArrowDirections.down : el;
  });

  if (arrowdirection.value[i] == ArrowDirections.down) {
    arrowdirection.value[i] = ArrowDirections.up;
    sortColumn.value = {index: i, direction: 'ascending'}
  } else {
    arrowdirection.value[i] = ArrowDirections.down;
    sortColumn.value = {index: i, direction: 'descending'}
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
.red {
  color: var(--rejected) !important;
}
.grey {
  color: var(--unactive-text) !important;
}
.select {
  color: var(--elements) !important;
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
      display: flex;
      flex-direction: column;
      gap: 8px;
      > p {
        color: var(--unactive-text, #a3aed0);
      }
      > h3 {
        color: var(--main-text);
      }
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
