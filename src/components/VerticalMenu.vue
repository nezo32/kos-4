<template>
  <div class="vertical__menu">
    <div class="vertical__menu__logo">
      <KosyginLogo />
    </div>
    <div class="vertical__menu__buttons">
      <slot></slot>
    </div>
    <div class="vertical__menu__id">
      <KosyginIDButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import KosyginIDButton from "./buttons/KosyginIDMenuButton.vue";
import KosyginLogo from "./logos/KosyginLogo.vue";
</script>

<style scoped lang="scss">
.vertical__menu {
  height: fit-content;

  background: #ffffff;
  border-radius: 0px 0px 20px 20px;

  padding: 30px 0px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  &__logo {
    padding: 0px 43px 30px 43px;
    border-bottom: 1px solid #f4f7fe;
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10px;
  }
  &__id {
    margin-top: 108px;
    padding: 0px 25px;
  }
}
</style>
