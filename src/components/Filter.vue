<template>
  <div class="filter" ref="outsideDetectionComponent">
    <div class="filter__header">
      <input
        v-if="!date"
        :class="{ disabled }"
        @click="!disabled ? (clicked = true) : (clicked = false)"
        v-model="input"
        type="text"
        class="search__text"
        :placeholder="placeholder"
        :title="input"
      />
      <FilterIcon v-if="!props.date" />
      <template v-if="date">
        <DatePicker
          range
          min-range="6"
          max-range="6"
          :title="input"
          ref="dateInput"
          class="datepicker__filter"
          style="width: 100%"
          v-model="input"
          locale="ru"
          cancel-text="Закрыть"
          select-text="Выбрать"
          format="dd.MM"
          @input="onInput"
          :enable-time-picker="false"
          text-input
        >
        </DatePicker>
      </template>
      <DatepickerIcon v-if="props.date" />
    </div>
    <div class="filter__after" v-if="clicked && cont.length">
      <p
        v-for="i in cont"
        :key="i"
        @click="
          input = i;
          value = i;
          clicked = !clicked;
        "
        :title="i"
      >
        {{ i }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, watchEffect, onMounted } from "vue";
import DatepickerIcon from "./icons/filters/DatepickerIcon.vue";
import DatePicker from "@vuepic/vue-datepicker";
import FilterIcon from "./icons/filters/FilterIcon.vue";
import detect from "@/detectOutsideElement";

const props = defineProps<{
  content: Array<string>;
  placeholder: string;
  date?: boolean;
  modelValue?: string | Date;
  trigger?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits(["update:modelValue", "null"]);

const cont = ref<Array<string>>(props.content);
const clicked = ref(false);
const outsideDetectionComponent = ref();
const input = ref<string | undefined>("");

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

detect(outsideDetectionComponent, () => {
  if (clicked.value) clicked.value = !clicked.value;
  if (input.value == "") value.value = "";
});

watch(input, async (n) => {
  if (props.date) return;
  cont.value = [];
  props.content.forEach((el) => {
    if (n != undefined)
      if (el.toUpperCase().includes(n.toUpperCase())) cont.value.push(el);
  });
});

function onInput(e: InputEvent) {
  if (e.data) return;
  input.value = undefined;
}

watchEffect(() => {
  props.trigger ? (input.value = "") : (input.value = "");
});

onMounted(() => {
  if (!props.date) input.value = (value.value as string) || "";
});
</script>

<style lang="scss">
@import "../assets/sass/filter_datepicker.scss";
.filter {
  width: 100%;
  position: relative;

  &__header {
    box-sizing: border-box;
    width: 100%;

    & > *:nth-child(2) {
      flex-shrink: 0;
    }
    & > *:nth-child(3) {
      flex-shrink: 0;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f4f7fe;
    border-radius: 20px;
    padding: 12px;

    box-sizing: border-box;

    > input {
      &.disabled {
        pointer-events: none;
      }

      cursor: pointer;
      width: 100%;

      outline: none;
      border: none;
      background: none;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      color: var(--main-text);

      &::placeholder {
        color: var(--unactive-text);
      }
    }
  }
  &__after {
    width: fit-content;

    max-width: 512px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    position: absolute;
    top: 64px;
    left: -15px;

    z-index: 100;

    background: #ffffff;
    box-shadow: 3px 3px 16px #eaedf3;
    border-radius: 10px;

    padding: 15px;
    > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      cursor: pointer;

      padding: 5px 20px 5px 10px;

      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #2b3674;

      margin: 0;

      &:hover {
        background: #f4f7fe;
        border-radius: 5px;
      }
    }
  }
}
</style>
