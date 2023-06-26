<template>
  <div class="service__header">
    <div class="service__header__content">
      <p><Breadcrumbs :path="path" /></p>
      <h2>{{ props.title }}</h2>
    </div>
    <div class="service__header__profile">
      <Profile
        v-model:choosed="passing"
        :statuses="statuses"
        :notification-active="false"
        :name="name || 'Попов Дмитрий'"
        :pfpUrl="pfp"
        :path="notificationPath"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "./BreadCrumbs.vue";
import Profile from "./Profile.vue";
import { computed } from "vue";
import type { ProfileStatusesProp } from "@/@types";

const props = defineProps<{
  title: string;
  name?: string;
  pfp?: string;
  path?: Array<{ name: string; path: string }>;
  notificationPath?: string;
  statuses: ProfileStatusesProp;
  choosed: string;
}>();

const path = computed(() => props.path || [{ name: "", path: "/" }]);

const emits = defineEmits(['update:choosed'])
const passing = computed({
  get: () => {
    return props.choosed
  },
  set: (value) => {
    emits('update:choosed', value);
  }
})
</script>

<style scoped lang="scss">
.service__header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
