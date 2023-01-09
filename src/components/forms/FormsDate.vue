<template>
  <div class="form__date">
    <VueDatePicker v-model="cmptd" locale="ru" :enable-time-picker="false">
      <template #trigger>
        <div class="form__date__input">
          <input type="text" :placeholder="cmptd" disabled />
          <CalendarIcon />
        </div>
      </template>
    </VueDatePicker>
  </div>
</template>

<script setup lang="ts">
import CalendarIcon from "../icons/CalendarIcon.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { computed } from "vue";
const props = defineProps<{
  modelValue?: any;
}>();
const emit = defineEmits(["update:modelValue"]);
const cmptd = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss">
.form__date {
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
}
</style>
