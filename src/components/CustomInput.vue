<template>
  <div class="custom__input" :class="objectStyleAll">
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
        class="datepicker"
        style="width: 100%"
        v-model="input"
        @input="onInput"
        text-input
        @focusin="onFocusIn()"
        @focusout="onFocusOut()"
      >
        <template>
          <input type="text" :value="value" class="datepicker__input" />
        </template>
      </DatePicker>
    </template>
    <CalendarIcon v-if="date" style="color: var(--unactive-text)" />
    <span>{{ props.theme }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, watch } from "vue";
import CalendarIcon from "./icons/CalendarIcon.vue";
import DatePicker from "@vuepic/vue-datepicker";

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
  console.log(e);
  if (e.data) return;
  input.value = undefined;
}

function onFocusIn() {
  objectStyleAll.blue = true;
  objectStyleAll.pos = true;
}
function onFocusOut() {
  console.log(input.value);
  objectStyleAll.blue = false;
  input.value === "" || input.value === undefined || input.value === null
    ? (objectStyleAll.pos = false)
    : (objectStyleAll.pos = true);
  value.value = input.value;
}

watch(input, (n) => {
  console.log(`watch: ${n}`);
  value.value = n;
});
</script>

<style scoped lang="scss">
.datepicker {
  height: fit-content;
  .dp__input_wrap {
    > svg {
      display: none;
    }
  }
  &__input {
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
}

.custom__input {
  &[disabled] {
    > input {
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
