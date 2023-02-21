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
          :auto-position="false"
          :partial-range="false"
          placeholder="Период"
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
    <div class="filter__after" v-if="clicked && cont.length && content">
      <div class="filter__after__wrapper">
        <template v-for="(v, i) of cont" :key="i">
          <p
            class="filter__after__wrapper__elem"
            @click="
              input = v;
              value = v;
              clicked = !clicked;
            "
            :title="v"
          >
            {{ v }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, watchEffect, onMounted } from "vue";
import DatepickerIcon from "./icons/filters/DatepickerIcon.vue";
import DatePicker from "@vuepic/vue-datepicker";
import FilterIcon from "./icons/filters/FilterIcon.vue";
import detect from "@/detectOutsideElement";

const selected = ref(-1);

function keys() {
  document.addEventListener("keydown", (e) => {
    if (clicked.value && cont.value.length) {
      if (e.key === "Enter") {
        const elems = document.querySelectorAll(
          ".filter__after__wrapper__elem"
        );
        input.value = elems[selected.value].textContent || "";
        value.value = elems[selected.value].textContent || "";
        clicked.value = false;
      }
      if (e.key === "ArrowDown") {
        const elems = document.querySelectorAll(
          ".filter__after__wrapper__elem"
        );
        if (selected.value < cont.value.length - 1) selected.value++;
        if (selected.value > 4) {
          const wrapper = document.querySelector(".filter__after__wrapper");
          wrapper?.scrollBy(0, 31);
        }
        elems.forEach((v) => v.classList.remove("hover"));
        elems[selected.value].classList.add("hover");
        const elem = elems[selected.value] as HTMLElement;
        elem.focus();
      }
      if (e.key === "ArrowUp") {
        const elems = document.querySelectorAll(
          ".filter__after__wrapper__elem"
        );
        if (selected.value > 0) selected.value--;
        if (selected.value < cont.value.length - 4) {
          const wrapper = document.querySelector(".filter__after__wrapper");
          wrapper?.scrollBy(0, -31);
        }
        elems.forEach((v) => v.classList.remove("hover"));
        elems[selected.value].classList.add("hover");
        const elem = elems[selected.value] as HTMLElement;
        elem.focus();
      }
    }
  });
}

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

const height = computed(() => {
  if (cont.value.length < 5) {
    return `${(cont.value.length - 1) * (26 + 5) + 26}px`;
  } else return `${4 * (26 + 5) + 26}px`;
});

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
  keys();
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
    position: absolute;
    top: 64px;
    left: -15px;

    max-width: 512px;

    z-index: 100;

    background: #ffffff;
    box-shadow: 3px 3px 16px #eaedf3;
    border-radius: 10px;

    padding: 15px 5px 15px 15px;

    &__wrapper {
      padding-right: 10px;
      max-height: v-bind(height);
      overflow: auto;

      &::-webkit-scrollbar {
        width: 5px;
        /* width of the entire scrollbar */
      }

      &::-webkit-scrollbar-track {
        background: #f4f7fe;
        border-radius: 31px;
        /* color of the tracking area */
      }

      &::-webkit-scrollbar-thumb {
        background-color: #a3aed0;
        border-radius: 22px;
        /* color of the scroll thumb */
      }

      display: flex;
      flex-direction: column;
      gap: 5px;

      > p {
        flex-shrink: 0;
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

        &:hover,
        &.hover {
          background: #f4f7fe;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
