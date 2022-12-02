<template>
  <div class="search__filter">
    <div class="search__filter__header">
      <input type="text" placeholder="Поиск" />
      <SearchIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from "./icons/filters/SearchIcon.vue";
</script>

<style scoped lang="scss">
.search__filter {
  position: relative;

  &__header {
    cursor: pointer;

    & > *:nth-child(2) {
      flex-shrink: 0;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    background: #f4f7fe;
    border-radius: 10px;
    padding: 11px 12px;

    > input {
      width: 205px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #2b3674;

      border: none;
      background: transparent;

      &::placeholder {
        color: #a3aed0;
      }
    }
  }
}
</style>
