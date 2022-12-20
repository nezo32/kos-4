<template>
  <div class="footer viewpoint">
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
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TelegramIcon from "./icons/social/TelegramIcon.vue";
import UnivIcon from "./icons/social/UnivIcon.vue";
import VKIcon from "./icons/social/VKIcon.vue";
import FooterLogo from "./logos/FooterLogo.vue";
import Feedback from "./Feedback.vue";
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;

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
}
</style>
