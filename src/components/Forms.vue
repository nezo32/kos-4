<template>
  <div class="form" ref="outsideDetectionComponent">
    <p v-if="props.header">{{ props.header }}<HintIcon :active="true" /></p>
    <div class="form__input" v-if="props.type === 'input'">
      <input type="text" />
    </div>
    <div
      class="form__dropdown"
      v-if="props.type === 'dropdown'"
      @click="active = !active"
    >
      <span>{{ selected }}</span>
      <ArrowFormIcon
        :direciton="active ? ArrowDirections.down : ArrowDirections.right"
      />
      <div
        class="form__dropdown__list"
        v-if="props.type === 'dropdown' && active"
      >
        <p v-for="i in tired" @click="selected = i" :key="i">{{ i }}</p>
      </div>
    </div>
    <VueDatePicker v-model="date" v-if="props.type === 'date'" locale="ru">
      <template #trigger>
        <div class="form__date">
          <input type="text" :placeholder="date" disabled />
          <CalendarIcon />
        </div>
      </template>
    </VueDatePicker>
  </div>
</template>

<script setup lang="ts">
import detect from "@/detectOutsideElement";
import ArrowFormIcon from "./icons/arrows/ArrowFormIcon.vue";
import HintIcon from "./icons/HintIcon.vue";
import { ArrowDirections } from "@/types/types";
import { ref } from "vue";
import CalendarIcon from "./icons/CalendarIcon.vue";
import VueDatePicker from "@vuepic/vue-datepicker";

const props = defineProps<{
  type: "input" | "dropdown" | "date";
  header?: string;
}>();

const tired = [
  "Технологический институт текстильной и легкой промышленностиа",
  "Институт мехатроники и робототехники",
  "Институт химических технологий и промышленной экологии",
  "Институт информационных технологий и цифровой трансформации",
];

const active = ref(false);
const selected = ref(tired[0]);
const date = ref();

const outsideDetectionComponent = ref();

detect(outsideDetectionComponent, () => {
  if (active.value) active.value = !active.value;
});
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .dp__main {
    width: 100%;
    > div {
      width: 100%;
      > div {
        padding: 11px 15px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        > input {
          width: 100%;
          border: none;
          outline: none;
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
          color: #2b3674;

          background: none;

          &::placeholder {
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            color: #2b3674;
          }
        }
      }
    }
  }

  &__input {
    padding: 11px 15px;
  }

  &__dropdown {
    padding: 11px 15px;

    position: relative;
    > &__list {
      top: 60px;
      left: 0;

      width: 96.3%;

      position: absolute;
      padding: 15px;
      background: #ffffff;
      box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
      border-radius: 10px;
      > p {
        padding: 5px 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #2b3674;

        &:hover {
          background: #f4f7fe;
          border-radius: 5px;
        }

        margin: 0;
      }
    }
  }

  > p {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #016ae7;

    margin: 0;
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #016ae7;

    > span {
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: #2b3674;
    }

    > input {
      width: 100%;
      border: none;
      outline: none;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: #2b3674;

      background: none;

      &::placeholder {
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #2b3674;
      }
    }

    background: #ffffff;
    border: 1px solid #a3aed0;
    border-radius: 10px;
  }
}
</style>
