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
    <FormsMultipleDropdown
      v-for="i in countOfDropdown"
      :key="i"
      :date="date"
      v-model="modelValues[i]"
      :content="content"
      v-if="props.type === 'multi'"
    />
    <FormsDate v-if="props.type === 'date'" v-model="cmptd" />
    <article class="form__add" v-if="props.type === 'multi'">
      <div class="form__add__separator"></div>
      <div class="form__add__content" @click="countOfDropdown++">
        <span>+</span>Добавить
      </div>
      <div class="form__add__separator"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import detect from "@/detectOutsideElement";

import HintIcon from "../icons/HintIcon.vue";
import { ref, computed, watch, reactive } from "vue";
import FormsDate from "./FormsDate.vue";
import FormsDropdown from "./FormsDropdown.vue";
import FormsMultipleDropdown from "./FormsMultipleDropdown.vue";

const props = defineProps<{
  type: "input" | "dropdown" | "date" | "multi";
  header?: string;
  modelValue?: any;
  content: Array<string>;
  date?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const countOfDropdown = ref(1);

const active = ref(false);

const outsideDetectionComponent = ref();

const modelValues = reactive<Array<typeof cmptd>>([]);

watch(modelValues, () => {
  cmptd.value = modelValues;
});

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

  &__add {
    padding-top: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;

    &__separator {
      border: 1px solid #016ae7;
      width: 100%;
    }

    &__content {
      cursor: pointer;

      color: var(--elements);

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 22px;
      > span {
        padding: 4px 11px;
        font-weight: 400 !important;
        font-size: 24px !important;
        line-height: 28px !important;
      }
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;
    }
  }
}
</style>
