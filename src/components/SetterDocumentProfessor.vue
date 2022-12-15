<template>
  <div class="professor__setter" ref="outsideDetectionComponent">
    <ActionButton
      :small="true"
      content="Назначить"
      @click="opened = !opened"
      :class="{ active: opened }"
    />
    <div class="professor__setter__after" v-if="opened">
      <SearchFilter />
      <div>
        <p v-for="i in props.allowed" @click="opened = !opened" :key="i">
          {{ i }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ActionButton from "./buttons/ActionButton.vue";
import SearchFilter from "./SearchFilter.vue";
import detect from "@/detectOutsideElement";

const opened = ref(false);

const props = defineProps<{
  allowed: Array<string>;
}>();

const outsideDetectionComponent = ref();

detect(outsideDetectionComponent, () => {
  if (opened.value) opened.value = !opened.value;
});
</script>

<style scoped lang="scss">
.professor__setter {
  position: relative;

  > button {
    padding: 3px 10px 3px 11px;
    border: 1px solid #016ae7;
    border-radius: 10px;
    background: none;

    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #016ae7;

    &:hover {
      background: #016ae7;
      color: white;
    }
  }

  &__after {
    display: flex;
    flex-direction: column;
    gap: 10px;

    top: 30px;
    right: 0;

    padding: 15px;

    position: absolute;
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
    border-radius: 10px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      > p {
        padding: 5px 10px;

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
}
</style>
