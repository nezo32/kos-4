<template>
  <div class="form" ref="outsideDetectionComponent">
    <p v-if="props.header">{{ props.header }}<HintIcon :active="true" /></p>
    <div class="form__input" v-if="props.type === 'input'">
      <input type="text" v-model="cmptd" />
    </div>
    <FormsDropdown
      v-if="props.type === 'dropdown'"
      v-model="cmptd"
      :content="content"
    />
    <FormsDate v-if="props.type === 'date'" v-model="cmptd" />
  </div>
</template>

<script setup lang="ts">
import detect from "@/detectOutsideElement";

import HintIcon from "../icons/HintIcon.vue";
import { ref, computed } from "vue";
import FormsDate from "./FormsDate.vue";
import FormsDropdown from "./FormsDropdown.vue";

const props = defineProps<{
  type: "input" | "dropdown" | "date";
  header?: string;
  modelValue?: any;
  content: Array<string>;
}>();
const emit = defineEmits(["update:modelValue"]);

const active = ref(false);

const outsideDetectionComponent = ref();

const cmptd = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

detect(outsideDetectionComponent, () => {
  if (active.value) active.value = !active.value;
});
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__input {
    padding: 11px 15px;
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

    background: #ffffff;
    border: 1px solid #a3aed0;
    border-radius: 10px;
  }
}
</style>
