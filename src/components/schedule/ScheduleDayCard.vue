<template>
  <div class="schedule__card">
    <div class="schedule__card__header">
      <div>
        <h5>{{ props.day }}</h5>
        <span>Состоялось {{ props.countOfEvents }} мероприятий</span>
      </div>
      <ArrowFormIcon
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
        <ScheduleEvent
          v-for="i in 3"
          header="Все айтишники Университета Косыгина вместе идут смотреть на краисвых котов и кошечек"
          organaizer="Организатор: Студенческий совет"
          member-count="2 321 участника"
          event-status="Мероприятия завершено"
          date="08.09 - 11.09"
          event-img="../src/assets/img/biba.svg"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArrowDirections } from "@/types/types";
import ArrowFormIcon from "../icons/arrows/ArrowFormIcon.vue";
import ScheduleEvent from "./ScheduleEvent.vue";

const props = defineProps<{
  day: string;
  countOfEvents: number;
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

    > div {
      > h5 {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #2b3674;

        margin: 0;
      }
      > span {
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #2b3674;
      }
    }

    &__arrow {
      transition: all 0.25s ease-in-out;
    }
  }
  &__content {
    margin-bottom: 15px;
  }
}
</style>
