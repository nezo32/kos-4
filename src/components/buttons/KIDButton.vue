<template>
  <button
    class="KID__button"
    :class="{ next: props.general, back: !props.general }"
  >
    {{ props.content }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ content: string; general?: boolean }>();
</script>

<style scoped lang="scss">
.KID__button {
  &.next {
    background: #016ae7;

    &:hover {
      background: #055ec8;
    }
  }

  &.back {
    color: #016ae7;
    background: white;

    &:hover {
      background: #016ae7;
      color: white;
    }
  }

  cursor: pointer;

  padding: 10.5px 45px;

  border-radius: 10px;
  border: 1px solid #016ae7;

  text-align: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}
</style>
