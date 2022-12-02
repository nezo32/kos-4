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
      <TableColumn header="aboba" v-for="i in 6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FileDropDown from "./FileDropDown.vue";
import SearchFilter from "./SearchFilter.vue";
import TableColumn from "./TableColumn.vue";

const props = defineProps<{
  header: string;
}>();
</script>

<style scoped lang="scss">
.table {
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
