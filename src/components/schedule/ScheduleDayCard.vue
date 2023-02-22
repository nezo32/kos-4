<template>
  <div class="schedule__card">
    <div class="schedule__card__header" @click="watcher = !watcher">
      <div style="color: var(--main-text); gap: 5px">
        <h5 class="input__header">{{ props.day }}</h5>
        <span class="table__action__text" style="color: var(--unactive-text)">{{
          props.subtitle
        }}</span>
      </div>
      <ArrowFormIcon
        style="color: var(--main-text)"
        class="schedule__card__header__arrow"
        :direciton="watcher ? ArrowDirections.down : ArrowDirections.right"
      />
    </div>
    <Transition name="v">
      <div
        class="schedule__card__content"
        v-if="watcher == true && props.content && props.content.length"
      >
        <div>
          <div v-for="(v, i) of props.content" :key="i">
            <ScheduleEventCard
              :header="v.header"
              :organaizer="v.organaizer"
              :member-count="v.memberCount"
              :event-status="v.eventStatus"
              :date="v.date"
              :event-img="v.eventImg"
              :schedule="v.schedule"
              :groups="v.groups"
              :teacher-view="v.teacherView"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ArrowDirections, type ScheduleEvent } from "@/types/types";
import ArrowFormIcon from "../icons/arrows/ArrowFormIcon.vue";
import ScheduleEventCard from "./ScheduleEvent.vue";

const props = defineProps<{
  day?: string;
  subtitle?: string;
  content?: Array<ScheduleEvent>;
  isOpened?: boolean;
}>();
const emit = defineEmits(["update:isOpened"]);

const direction = ref(ArrowDirections.right);
const watcher = computed({
  get() {
    return props.isOpened;
  },
  set(value) {
    emit("update:isOpened", value);
    if (value) direction.value = ArrowDirections.down;
    else direction.value = ArrowDirections.right;
  },
});

const maxHeight = ref(`${(props.content?.length || 1) * 165}px`);
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.35s ease-in-out;
}

.v-enter-to,
.v-leave-from {
  max-height: v-bind(maxHeight) !important;
}

.v-enter-from,
.v-leave-to {
  max-height: 0px !important;
}
.schedule__card {
  background: #ffffff;
  border-radius: 10px;
  padding: 15px 20px 15px 20px;
  &__header {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__arrow {
      transition: all 0.25s ease-in-out;
    }

    & > *:first-child {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  &__content {
    overflow: hidden;
    margin-bottom: 15px;
  }
}
</style>
