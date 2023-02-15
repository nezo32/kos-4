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
      <p class="status__choose__text">
        <LocationScheduleIcon v-if="props.schedule" />
        <StarScheduleIcon v-if="!props.schedule" />
        {{ props.eventStatus }}
      </p>
    </span>
    <h4 class="status__choose__text">{{ props.date }}</h4>
  </div>
</template>

<script setup lang="ts">
import HumanScheduleIcon from "../icons/schedule/HumanScheduleIcon.vue";
import LocationScheduleIcon from "../icons/schedule/LocationScheduleIcon.vue";
import StarScheduleIcon from "../icons/schedule/StarScheduleIcon.vue";

const props = defineProps<{
  header?: string;
  organaizer?: string;
  memberCount?: string;
  eventStatus?: string;
  date?: string;
  eventImg?: string;
  schedule?: boolean;
}>();
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
}
</style>
