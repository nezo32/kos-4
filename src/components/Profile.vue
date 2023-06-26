<template>
  <div class="profile">
    <a :href="pathValue">
      <NotificationProfileIcon
        style="color: var(--main-text)"
        :active="props.notificationActive"
      />
    </a>
    <img
      :src="
        props.pfpUrl ||
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leopard_in_the_Colchester_Zoo.jpg/1200px-Leopard_in_the_Colchester_Zoo.jpg'
      "
      alt="pfp"
      rounded
      width="50"
      height="50"
    />
    <div class="profile__name-status">
      <p>{{ props.name }}</p>
      <StatusChoose v-model="passing" :statuses="props.statuses" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NotificationProfileIcon from "./icons/NotificationProfileIcon.vue";
import StatusChoose from "./StatusChoose.vue";
import { computed } from "vue";
import type { ProfileStatusesProp } from "@/@types";

const props = defineProps<{
  notificationActive: boolean;
  pfpUrl?: string;
  name: string;
  path?: string;
  statuses: ProfileStatusesProp;
  modelValue?: string;
}>();
const emits = defineEmits(["update:modelValue"]);

const pathValue = computed(() => props.path || "");
const passing = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emits("update:modelValue", value);
  },
});
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  &__name-status {
    z-index: 100;

    display: flex;
    flex-direction: column;
    gap: 6px;

    > p {
      margin: 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #2b3674;
    }
  }
}
</style>
