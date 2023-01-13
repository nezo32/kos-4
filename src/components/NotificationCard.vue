<template>
  <div class="notification__card">
    <img :src="props.img" alt="alert" />
    <div class="notification__card__content">
      <h2>{{ props.header }}</h2>
      <p>{{ props.desc }}</p>
      <span>{{ props.howLongAgo }}</span>
    </div>
    <div class="notification__card__close">
      <DocumentStatusIcon :status="DocumentStatus.rejected" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentStatus } from "@/types/types";
import DocumentStatusIcon from "./icons/DocumentStatusIcon.vue";

const props = defineProps<{
  img: string;
  header: string;
  desc: string;
  howLongAgo: string;
}>();
</script>

<style scoped lang="scss">
.notification__card {
  padding: 15px 0 10px 0;
  border-bottom: 2px solid #f4f7fe;

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    width: 124px;
    height: 124px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #2b3674;
    }
    > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #2b3674;
    }
    > span {
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      color: #989898;
    }

    & > * {
      margin: 0;
    }
    margin-left: 20px;
  }

  &__close {
    position: absolute;
    top: 14px;
    right: 0;
    cursor: pointer;
  }
}
</style>
