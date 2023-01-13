<template>
  <div class="feedback" ref="detectOutside">
    <button
      @click="feedbackActive = !feedbackActive"
      style="cursor: pointer"
      search__text
    >
      Форма обратной связи
    </button>
    <div class="feedback__content" v-if="feedbackActive">
      <h4>Форма обратной связи</h4>
      <p>
        Пожалуйста, расскажите подробнее, что случилось. Это поможет нам быстрее
        разобраться
      </p>
      <div class="feedback__content__inputs">
        <Input theme="Почта" :footer="true" />
        <textarea
          rows="10"
          maxlength="300"
          placeholder="Введите сообщение..."
        ></textarea>
      </div>
      <div class="feedback__content__buttons">
        <KIDButton
          content="Отправить"
          :general="true"
          @click="feedbackActive = false"
        />
        <KIDButton
          content="Закрыть"
          :general="false"
          @click="feedbackActive = false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KIDButton from "./buttons/KIDButton.vue";
import Input from "@/components/CustomInput.vue";
import detect from "@/detectOutsideElement";

import { ref } from "vue";

const feedbackActive = ref(false);
const detectOutside = ref();

detect(detectOutside, () => {
  if (feedbackActive.value) feedbackActive.value = !feedbackActive.value;
});
</script>

<style scoped lang="scss">
.feedback {
  position: relative;

  > button {
    border: none;
    padding: 0;
    background: none;

    color: var(--elements);
  }

  &__content {
    z-index: 100;

    position: absolute;

    bottom: 239px;
    right: -33px;

    width: 360px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(11, 20, 64, 0.2);
    border-radius: 20px;

    > h4 {
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 140%;
      color: #016ae7;
      margin: 0;
    }
    > p {
      font-weight: 300;
      font-size: 18px;
      line-height: 140%;
      color: #000000;
      margin: 0;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      gap: 20px;

      width: 92%;
      > textarea {
        width: 100%;

        padding: 15px;
        font-weight: 300;
        font-size: 18px;
        line-height: 140%;
        color: #000000;
        outline: none;
        resize: none;
        border: 1px solid #a3aed0;
        border-radius: 10px;

        &::placeholder {
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
          color: #a3aed0;
        }

        &::-webkit-scrollbar {
          width: 5px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #303030;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
          background: transparent;
        }
      }
    }

    &__buttons {
      & > * {
        width: 100%;
      }
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
}
</style>
