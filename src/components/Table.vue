<template>
  <div class="table">
    <div class="table__theader">
      <h3>{{ props.header }}</h3>
      <div class="table__theader__search">
        <SearchFilter />
        <FileDropDown />
      </div>
    </div>
    <div class="table__tbody">
      <div class="table__tbody__head">
        <div class="table__tbody__head__element">
          <p>Код</p>
          <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
        </div>
        <div class="table__tbody__head__element">
          <p>Направление подготовки</p>
          <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
        </div>
        <div class="table__tbody__head__element">
          <p>Профиль</p>
          <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
        </div>
        <div class="table__tbody__head__element">
          <p>Уровень</p>
          <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
        </div>
        <div class="table__tbody__head__element">
          <p>Форма</p>
          <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
        </div>
        <div class="table__tbody__head__element">
          <p>Заполнено</p>
          <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
        </div>
      </div>
      <div class="table__tbody__body">
        <div class="table__tbody__body__element">
          <p v-for="i in 10">1</p>
        </div>
        <div class="table__tbody__body__element"><p v-for="i in 10">1</p></div>
        <div class="table__tbody__body__element"><p v-for="i in 10">1</p></div>
        <div class="table__tbody__body__element"><p v-for="i in 10">1</p></div>
        <div class="table__tbody__body__element"><p v-for="i in 10">1</p></div>
        <div class="table__tbody__body__element"><p v-for="i in 10">1</p></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections } from "@/types/types";
import FileDropDown from "./FileDropDown.vue";
import ArrowSwipePagesIcon from "./icons/arrows/ArrowSwipePagesIcon.vue";
import SearchFilter from "./SearchFilter.vue";

const props = defineProps<{
  header: string;
}>();
</script>

<style scoped lang="scss">
.table {
  --w1: 58px;
  --w2: 274px;
  --w3: 271px;
  --w4: 124px;
  --w5: 93px;
  --w6: calc(100% - var(--w1) - var(--w2) - var(--w3) - var(--w4) - var(--w5));

  display: flex;
  flex-direction: column;

  padding: 20px;
  background: #ffffff;
  border-radius: 20px;

  gap: 30px;

  &__theader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #2b3674;

      margin: 0;
    }

    &__search {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  }

  &__tbody {
    &__head {
      width: 100%;

      display: flex;
      flex-direction: row;

      border-bottom: 2px solid #f4f7fe;

      &__element {
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
    }
    &__body {
      display: flex;
      flex-direction: row;
      &__element {
        display: flex;
        flex-direction: column;

        > p {
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          color: #2b3674;
          margin: 0;
        }
      }
    }
  }
}
</style>
