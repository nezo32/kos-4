<template>
  <div class="vertical__menu__button">
    <router-link :to="props.url">
      <HomeIcon v-if="props.icon == 'home'" />
      <ManagementIcon v-if="props.icon == 'management'" />
      <NotificationMenuIcon v-if="props.icon == 'notification'" />
      <ExitIcon v-if="props.icon == 'exit'" />
      <EducationIcon v-if="props.icon == 'education'" />
      <ScienceIcon v-if="props.icon == 'science'" />
      <EventsIcon v-if="props.icon == 'events'" />
      <ProfessorsIcon v-if="props.icon == 'professors'" />
      <MyDataIcon v-if="props.icon == 'data'" />
      <SecurityIcon v-if="props.icon == 'security'" />

      {{ props.content }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import EducationIcon from "../icons/menu/EducationIcon.vue";
import EventsIcon from "../icons/menu/EventsIcon.vue";
import ExitIcon from "../icons/menu/ExitIcon.vue";
import HomeIcon from "../icons/menu/HomeIcon.vue";
import ManagementIcon from "../icons/menu/ManagementIcon.vue";
import MyDataIcon from "../icons/menu/MyDataIcon.vue";
import NotificationMenuIcon from "../icons/menu/NotificationMenuIcon.vue";
import ProfessorsIcon from "../icons/menu/ProfessorsIcon.vue";
import ScienceIcon from "../icons/menu/ScienceIcon.vue";
import SecurityIcon from "../icons/menu/SecurityIcon.vue";

const props = defineProps<{
  content: string;
  url: string;
  icon:
    | "home"
    | "management"
    | "notification"
    | "exit"
    | "education"
    | "science"
    | "events"
    | "professors"
    | "security"
    | "data";
}>();
</script>

<style scoped lang="scss">
.vertical__menu__button {
  width: 210px;
  > a {
    padding: 10px 0px 10px 14px;

    text-decoration: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #a3aed0;

    cursor: pointer;

    &:hover {
      color: #707eae;
    }
  }
  > a.router-link-active {
    background: #f4f7fe;
    border-radius: 20px 0px 0px 20px;

    > svg {
      color: #016ae7;
    }
    color: #2b3674;
  }
}
</style>
