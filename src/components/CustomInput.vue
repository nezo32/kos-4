<template>
  <div class="custom__input" :class="objectStyleAll" ref="customInput">
    <input
      v-if="!date"
      :class="{ footer__feedback__style: props.footer }"
      type="text"
      @focusin="onFocusIn()"
      v-model="input"
      @focusout="onFocusOut()"
    />
    <template v-if="date">
      <DatePicker
        autocomplete="true"
        ref="dateInput"
        class="datepicker"
        style="width: 100%"
        v-model="input"
        locale="ru"
        cancel-text="Закрыть"
        select-text="Выбрать"
        format="dd.MM.yyyy"
        @input="onInput"
        @focusout="onFocusOut"
        @focusin="onFocusIn"
        :auto-position="false"
        :enable-time-picker="false"
        text-input
      >
      </DatePicker>
    </template>
    <CalendarIcon
      v-if="date"
      style="color: var(--unactive-text)"
      @click="onFocusIn()"
    />
    <span>{{ props.theme }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, watch, onMounted } from "vue";
import CalendarIcon from "./icons/CalendarIcon.vue";
import DatePicker from "@vuepic/vue-datepicker";

const customInput = ref<HTMLElement>();

const props = defineProps<{
  theme: string;
  footer?: boolean;
  date?: boolean;
  modelValue?: any;
}>();

const emit = defineEmits(["update:modelValue"]);
const input = ref<string | Date>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const objectStyleAll = reactive({
  blue: false,
  pos: false,
});

function onInput(e: InputEvent) {
  if (e.data) return;
  input.value = undefined;
}

function onFocusIn() {
  objectStyleAll.blue = true;
  objectStyleAll.pos = true;
}
function onFocusOut() {
  objectStyleAll.blue = false;
  input.value === "" || input.value === undefined || input.value === null
    ? (objectStyleAll.pos = false)
    : (objectStyleAll.pos = true);
  value.value = input.value;
}

watch(input, (n) => {
  value.value = n;
});

onMounted(() => {
  if (props.date) input.value = new Date();
  else input.value = value.value;
  onFocusIn();
  onFocusOut();
});
</script>

<style lang="scss">
@import "@/assets/sass/custom_input_datepicker.scss";
.custom__input {
  height: fit-content;
  box-sizing: border-box;
  &[disabled] {
    input {
      pointer-events: none;
    }
    > span {
      left: 20px;
      top: -8px;
      background: white;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
    }
  }

  display: flex;
  flex-direction: row;
  align-items: center;

  &.blue {
    border: 1px solid #016ae7;
    > span {
      color: #016ae7 !important;
    }
  }
  &.pos {
    > span {
      left: 20px;
      top: -8px;

      color: #a3aed0;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;

      background: white;
    }
  }

  position: relative;

  border: 1px solid #a3aed0;
  border-radius: 10px;

  padding: 12px 15px 13px 15px;

  > input {
    width: 100%;

    background: transparent;
    border: none;

    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #000000;

    z-index: 1;

    &::placeholder {
      color: #a3aed0;
    }

    &.footer__feedback__style {
      font-weight: 300;
      font-size: 18px;
      line-height: 140%;
    }
  }

  > span {
    transition: all 0.1s ease-in-out;

    z-index: 0;

    left: 7px;
    top: 13px;

    padding: 0 10px;

    position: absolute;

    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #a3aed0;

    pointer-events: none;
  }
}
</style>
