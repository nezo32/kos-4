<template>
  <div class="schedule__card">
    <div class="schedule__card__header">
      <div style="color: var(--main-text)">
        <h5 class="input__header">{{ props.day }}</h5>
        <span class="table__action__text">{{ props.subtitle }}</span>
      </div>
      <ArrowFormIcon
        style="color: var(--main-text)"
        class="schedule__card__header__arrow"
        @click="changeDirection()"
        :direciton="direction"
      />
    </div>
    <Transition name="v">
      <div
        class="schedule__card__content"
        v-if="direction == ArrowDirections.down"
      >
        <div v-for="(v, i) of props.content" :key="i">
          <ScheduleEventCard
            :header="v.header"
            :organaizer="v.organaizer"
            :member-count="v.memberCount"
            :event-status="v.eventStatus"
            :date="v.date"
            :event-img="v.eventImg"
            :schedule="v.schedule"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArrowDirections, type ScheduleEvent } from "@/types/types";
import ArrowFormIcon from "../icons/arrows/ArrowFormIcon.vue";
import ScheduleEventCard from "./ScheduleEvent.vue";

const props = defineProps<{
  day: string;
  subtitle: string;
  content: Array<ScheduleEvent>;
}>();

const direction = ref(ArrowDirections.right);

function changeDirection() {
  setTimeout(() => {
    direction.value == ArrowDirections.right
      ? (direction.value = ArrowDirections.down)
      : (direction.value = ArrowDirections.right);
  }, 100);
}
</script>

<style scoped lang="scss">
.schedule__card {
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  padding: 15px 20px 15px 20px;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__arrow {
      transition: all 0.25s ease-in-out;
    }
  }
  &__content {
    margin-bottom: 15px;
  }
}
</style>
