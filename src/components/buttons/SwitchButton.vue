<template>
  <div class="switch__button" v-for="(v, i) of activity" :key="i">
    <button :class="{ active: v.active }" @click="exactActive(i)">
      {{ v.value }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";

const props = defineProps<{
  content: Array<string>;
}>();

const activity = ref<Array<{ value: string; active: boolean }>>([]);

function exactActive(i: number) {
  activity.value = activity.value.map((v) => {
    return { value: v.value, active: false };
  });
  activity.value[i].active = true;
}

onMounted(() => {
  props.content.forEach((v, i) => {
    activity.value.push({ value: v, active: false });
  });
});
</script>

<style scoped lang="scss">
.switch__button {
  > .active {
    color: #ffffff !important;
    background: #016ae7 !important;
    border: 1px solid #016ae7;
  }

  > button {
    text-align: center;

    padding: 12px 51px 12px 52px;

    background: #f4f7fe;
    border-radius: 10px;
    border: 1px solid #f4f7fe;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #a3aed0;

    &:hover {
      border: 1px solid #016ae7;
    }

    cursor: pointer;
  }
}
</style>
