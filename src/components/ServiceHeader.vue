<template>
  <div class="service__header">
    <div class="service__header__content">
      <p><Breadcrumbs /></p>
      <h2>{{ props.title }}</h2>
    </div>
    <div class="service__header__profile">
      <Profile
        :notification-active="false"
        name="Попов Дмитрий"
        :pfpUrl="pfp"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "./BreadCrumbs.vue";
import Profile from "./Profile.vue";

const props = defineProps<{
  title: string;
  pfp?: string;
}>();
</script>

<style scoped lang="scss">
.service__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > p {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #a3aed0;
    }

    > h2 {
      font-weight: 700;
      font-size: 34px;
      line-height: 140%;
      color: #2b3674;
    }

    & > * {
      margin: 0;
    }
  }
}
</style>
