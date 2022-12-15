<template>
  <div class="table__professor__entry">
    <img src="@/assets/img/images.png" alt="professor" smooth />
    <p>Малохин Владислав</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.table__professor__entry {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  > img {
    width: 30px;
    height: 30px;
  }
  > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: var(--main-text);
    margin: 0;
  }
}
</style>
