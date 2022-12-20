<template>
  <div class="table">
    <div class="table__body">
      <div class="table__body__column" v-for="i in aboba[0].length" :key="i">
        <p
          style="color: var(--main-text)"
          :class="{ excellent: aboba[0][i - 1] == '100%' }"
        >
          {{ aboba[0][i - 1] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections } from "@/types/types";
import { ref, onMounted } from "vue";
import FileDropDown from "../FileDropDown.vue";
import ArrowSwipePagesIcon from "../icons/arrows/ArrowSwipePagesIcon.vue";
import SearchFilter from "../SearchFilter.vue";

const headers = ref([
  "Код",
  "Направление подготовки",
  "Профиль",
  "Уровень",
  "Форма",
  "Заполнено",
]);

const aboba = ref([
  [
    "38.03.04",
    "Технология полиграфического и упаковочного производства",
    "Фотоискусство и мультимедиадизайн",
    "Ассистент-стажер",
    "Очно-заочная",
    "100%",
  ],
  [
    "50.03.02",
    "Дирижирование",
    "Отечественная филология (русский язык и литература)",
    "Магистр",
    "Очная",
    "23%",
  ],
  [
    "01.03.02",
    "Народная художественная культура",
    "Технологии менеджмента в сервисе",
    "Магистр",
    "Заочная",
    "45%",
  ],
  [
    "29.03.02",
    "Реклама и связи с общественностью",
    "Технологический дизайн и эко-брендинг упаковки",
    "Ассистент-стажер",
    "Заочная",
    "52%",
  ],
]);

const arrowdirection = ref<Array<ArrowDirections>>([]);

function changeSort(i: number) {
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
    aboba.value.sort((a, b) => {
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
    aboba.value.sort((a, b) => {
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
  headers.value.forEach((el, i) => {
    arrowdirection.value.push(ArrowDirections.down);
  });
});
</script>

<style scoped lang="scss">
.excellent {
  color: var(--resolved) !important;
}

.table {
  &__body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__column {
      display: flex;
      flex-direction: column;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 287.5px;
    }
  }
}
</style>
