<template>
  <div class="footer">
    <div class="footer__logo">
      <FooterLogo />
      <span>
        <p>119071, г. Москва, ул. Малая Калужская, д.1</p>
        <p>© 2022 ФГБОУ ВО РГУ им. А.Н. Косыгина</p>
      </span>
    </div>
    <div class="footer__links">
      <div class="footer__links__inner">
        <div class="footer__links__inner__block">
          <h2>Наши сервисы</h2>
          <a href="">Образование</a>
          <a href="">Рейтинг активности</a>
          <a href="">Расписание занятий</a>
          <a href="">Аналитика</a>
        </div>
        <div class="footer__links__inner__block">
          <h2>Placeholder</h2>
          <a href="">Аккредитация</a>
          <a href="">Паспортный стол</a>
        </div>
      </div>
      <div class="footer__links__inner">
        <div class="footer__links__inner__block">
          <h2>О нас</h2>
          <a href="">Документы университета</a>
          <a href="">Положение KosyginID</a>
          <a href="">Пользовательское соглашение</a>
          <a href="">Политика конфиденциальности</a>
        </div>
      </div>
      <div class="footer__links__inner">
        <div class="footer__links__inner__social">
          <div>
            <h2>Социальные сети</h2>
            <div>
              <UnivIcon />
              <VKIcon />
              <TelegramIcon />
            </div>
          </div>
          <div>
            <h2>Техподдержка</h2>
            <p>Почта: cit@rguk.ru</p>
            <p @click="feedbackActive = true">Форма обратной связи</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__feedback" v-if="feedbackActive">
      <h4>Форма обратной связи</h4>
      <p>
        Пожалуйста, расскажите подробнее, что случилось. Это поможет нам быстрее
        разобраться
      </p>
      <div class="footer__feedback__inputs">
        <Input theme="Почта" :footer="true" />
        <textarea
          rows="10"
          maxlength="300"
          placeholder="Введите сообщение..."
        ></textarea>
      </div>
      <div class="footer__feedback__buttons">
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
import TelegramIcon from "./icons/social/TelegramIcon.vue";
import UnivIcon from "./icons/social/UnivIcon.vue";
import VKIcon from "./icons/social/VKIcon.vue";
import Input from "./CustomInput.vue";
import FooterLogo from "./logos/FooterLogo.vue";
import KIDButton from "./buttons/KIDButton.vue";
import { ref } from "vue";

const feedbackActive = ref(false);
</script>

<style scoped lang="scss">
.footer {
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 70px;

  margin: 0 auto;
  padding: 40px 0px;

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    > span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #000000;

        margin: 0;
      }
    }
  }

  &__links {
    display: flex;
    flex-direction: row;
    gap: 107px;
    &__inner {
      display: flex;
      flex-direction: row;
      gap: 60px;
      &__block {
        display: flex;
        flex-direction: column;
        gap: 20px;

        > h2 {
          font-weight: 500;
          font-size: 18px;
          line-height: 140%;
          color: #000000;

          margin: 0;
        }
        > a {
          text-decoration: none;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #000000;

          &:hover {
            color: #016ae7;
          }
        }
        &:nth-child(2) {
          > h2 {
            visibility: hidden;
          }
        }
      }
      &__social {
        display: flex;
        flex-direction: column;
        gap: 20px;
        > div {
          display: flex;
          flex-direction: column;
          gap: 15px;

          > div {
            display: flex;
            flex-direction: row;
            gap: 15px;
          }

          > h2 {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
            color: #000000;

            margin: 0;
          }
          > p {
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #016ae7;

            margin: 0;
          }
        }
      }
    }
  }

  &__feedback {
    width: 360px;
    padding: 30px;
    position: absolute;
    top: -669px;
    right: 0;

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
