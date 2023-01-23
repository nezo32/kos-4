<template>
  <div class="form__multi__dropdown" @click="active = !active" ref="outer">
    <div class="form__multi__dropdown__input">
      <input
        placeholder="Выберите из списка или начните вводить в ручную"
        v-model="cmptd"
        style="cursor: pointer"
      />
      <ArrowFormIcon
        :direciton="active ? ArrowDirections.down : ArrowDirections.right"
        v-if="!date"
      />
      <CalendarIcon v-if="date" style="color: var(--unactive-text)" />
    </div>
    <div class="form__multi__dropdown__list" v-if="active">
      <p
        v-for="(v, i) of content"
        @click="cmptd = v"
        :key="i"
        style="cursor: pointer"
        :title="v"
      >
        {{ v }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ArrowFormIcon from "../icons/arrows/ArrowFormIcon.vue";
import { ArrowDirections } from "@/types/types";
import CalendarIcon from "../icons/CalendarIcon.vue";
import useDetectOutsideElementClick from "@/detectOutsideElement";

const props = defineProps<{
  content: Array<string>;
  modelValue?: any;
  date?: boolean;
}>();
const emits = defineEmits(["update:modelValue"]);

const active = ref(false);
const selected = ref(props.content[0]);

const outer = ref();

const cmptd = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

useDetectOutsideElementClick(outer, () => {
  active.value = false;
});
</script>

<style scoped lang="scss">
.form__multi__dropdown {
  position: relative;

  &__input {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 11px 15px;
    > input {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

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
        color: var(--unactive-text);
      }
    }
  }

  > &__list {
    z-index: 1000;
    top: 60px;
    left: 0;

    width: 96.3%;

    position: absolute;
    padding: 15px;
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
    border-radius: 10px;
    > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

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
</style>
