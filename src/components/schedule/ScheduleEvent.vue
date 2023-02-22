<template>
  <div class="event">
    <img :src="props.eventImg" alt="pfp" width="84" height="84" rounded />
    <span>
      <h4 class="table__action__text" :title="props.header">
        {{ props.header }}
      </h4>
      <p class="search__text">{{ props.organaizer }}</p>
      <p class="status__choose__text">
        <HumanScheduleIcon />
        {{ props.memberCount }}
      </p>
      <p class="status__choose__text" v-if="props.teacherView">
        <PeopleScheduleIcon />
        {{ props.groups }}
      </p>
      <p class="status__choose__text">
        <LocationScheduleIcon v-if="props.schedule" />
        <StarScheduleIcon v-if="!props.schedule" />
        {{ props.eventStatus }}
      </p>
    </span>
    <h4 class="status__choose__text">{{ props.date }}</h4>
    <h5 class="table__text" v-if="pair">{{ pair }}</h5>
  </div>
</template>

<script setup lang="ts">
import HumanScheduleIcon from "../icons/schedule/HumanScheduleIcon.vue";
import LocationScheduleIcon from "../icons/schedule/LocationScheduleIcon.vue";
import StarScheduleIcon from "../icons/schedule/StarScheduleIcon.vue";
import { computed } from "vue";
import PeopleScheduleIcon from "../icons/schedule/PeopleScheduleIcon.vue";

enum Time {
  "09:00 - 10:20" = 1,
  "10:30 - 11:50",
  "12:00 - 13:20",
  "14:00 - 15:20",
  "15:30 - 16:50",
  "17:00 - 18:20",
  "18:30 - 19:50",
  "20:00 - 21:20",
}

const pairArray = Object.keys(Time).filter((v) => isNaN(Number(v)));

const props = defineProps<{
  header?: string;
  organaizer?: string;
  memberCount?: string;
  eventStatus?: string;
  date?: string;
  eventImg?: string;
  schedule?: boolean;
  teacherView?: boolean;
  groups?: string;
}>();

const pair = computed(() => {
  if (!props.date) return 0;
  let answ = 0;
  pairArray.forEach((el, ind) => {
    if (el == props.date) answ = ind + 1;
  });
  return answ;
});
</script>

<style scoped lang="scss">
.event {
  border-bottom: 1px solid #f4f7fe;

  padding: 30px 0 10px 0;

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  > span {
    max-width: 82%;

    display: flex;
    flex-direction: column;
    gap: 4px;
    > h4 {
      color: var(--elements);

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > p {
      color: var(--main-text);

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
    > * {
      margin: 0;
    }
  }

  > h4 {
    color: var(--main-text);

    position: absolute;

    margin: 0;

    bottom: 10px;
    right: 0;
  }

  > h5 {
    color: var(--white);

    line-height: initial !important;
    padding: 4px 8px;

    border-radius: 100%;
    background: var(--main-text);

    position: absolute;

    margin: 0;

    top: 30px;
    right: 0;

    text-align: center;
  }
}
</style>
