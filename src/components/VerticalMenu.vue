<template>
  <div class="vertical__menu">
    <div class="vertical__menu__logo">
      <KosyginLogo />
    </div>
    <div class="vertical__menu__buttons">
      <VerticalMenuButtons content="Программы" icon="home" url="/" />
      <VerticalMenuButtons
        content="Руководители ОП"
        icon="management"
        url="/management"
      />
      <VerticalMenuButtons
        content="Уведомления"
        icon="notification"
        url="/notifications"
      />
      <VerticalMenuButtons content="Выход" icon="exit" url="/logout" />
    </div>
    <div class="vertical__menu__id">
      <KosyginIDButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import KosyginIDButton from "./buttons/KosyginIDMenuButton.vue";
import VerticalMenuButtons from "./buttons/VerticalMenuButtons.vue";
import KosyginLogo from "./logos/KosyginLogo.vue";
</script>

<style scoped lang="scss">
.vertical__menu {
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
    margin-left: 10px;
  }
  &__id {
    margin-top: 108px;
    padding: 0px 25px;
  }
}
</style>
