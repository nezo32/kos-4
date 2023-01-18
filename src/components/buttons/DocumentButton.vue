<template>
  <div class="document__button">
    <button :class="{ [props.color]: true }">
      {{ props.content }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: string;
  color: "red" | "blue";
}>();
</script>

<style scoped lang="scss">
.document__button {
  > .red {
    border: 1px solid #ff2d52;
    color: #ff2d52;

    &:hover {
      background: #ff2d52;
    }
  }
  > .blue {
    border: 1px solid #016ae7;
    color: #016ae7;

    &:hover {
      background: #016ae7;
    }
  }

  > button {
    text-align: center;

    padding: 10.5px 34px;
    min-width: 235px;
    border-radius: 10px;
    background: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    &:hover {
      color: white;
    }

    cursor: pointer;
  }
}
</style>
