<template>
  <div class="home">
    <div class="home__component">
      <h1>Палитра</h1>
      <h3>Основная палитра</h3>
      <article>
        <div>
          <div style="background: var(--background)"></div>
          <span>Фон</span>
        </div>
        <div>
          <div
            style="background: var(--white); border: 1px solid var(--grey)"
          ></div>
          <span>Белый</span>
        </div>
      </article>
      <article>
        <div>
          <div style="background: var(--main-text)"></div>
          <span>Основной текст</span>
        </div>
        <div>
          <div style="background: var(--elements)"></div>
          <span>Элементы</span>
        </div>
      </article>
      <article>
        <div>
          <div style="background: var(--breadcrumbs)"></div>
          <span>Хлебные крошки</span>
        </div>
        <div>
          <div style="background: var(--unactive-text)"></div>
          <span>Неактивный текст</span>
        </div>
      </article>
      <article>
        <div>
          <div style="background: var(--black)"></div>
          <span>Черный цвет</span>
        </div>
        <div>
          <div style="background: var(--button-hover)"></div>
          <span>Ховер кнопок</span>
        </div>
      </article>
      <article>
        <div>
          <div style="background: var(--grey)"></div>
          <span>Серый цвет</span>
        </div>
      </article>
      <h3>Вспомогательная палитра</h3>
      <article>
        <div>
          <div style="background: var(--rejected)"></div>
          <span>Отклонено</span>
        </div>
        <div>
          <div style="background: var(--resolved)"></div>
          <span>Утверждено</span>
        </div>
      </article>
      <article>
        <div>
          <div style="background: var(--graph-main)"></div>
          <span>График</span>
        </div>
        <div>
          <div style="background: var(--graph-secondary)"></div>
          <span>График</span>
        </div>
      </article>
    </div>
    <div class="home__component">
      <h1>Шрифты</h1>
      <h2>Roboto</h2>
      <p page__header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p table-card__header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p card__header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p input__header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p card__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p forms__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p menu__button__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p card__name__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p table__action__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p status__choose__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p breadcrumbs__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p search__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p fill__card__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
      <p small__text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        labore, pariatur et officiis quo, quasi a nobis officia doloribus quod
        est? Assumenda voluptates facere nostrum harum. Autem, doloremque rem!
      </p>
    </div>
    <div class="home__component">
      <h1>Фото-карточки</h1>
      <article>
        <img src="@/assets/img/template.png" alt="temp" rounded />
        <img src="@/assets/img/template.png" alt="temp" smooth />
      </article>
    </div>
    <div class="home__component">
      <h1>Иконки</h1>
    </div>
    <div class="home__component">
      <h1>Хлебные крошки</h1>
    </div>
    <div class="home__component">
      <h1>Выбор статуса</h1>
    </div>
    <div class="home__component">
      <h1>Календарь</h1>
    </div>
    <div class="home__component">
      <h1>Кнопки</h1>
    </div>
    <div class="home__component">
      <h1>Вертикальное меню</h1>
    </div>
    <div class="home__component">
      <h1>Расписание</h1>
    </div>
    <div class="home__component">
      <h1>Шапка сервиса</h1>
    </div>
    <div class="home__component">
      <h1>Блок фильтров</h1>
    </div>
    <div class="home__component">
      <h1>Уведомления</h1>
    </div>
    <div class="home__component">
      <h1>Инпуты</h1>
    </div>
    <div class="home__component">
      <h1>Таблицы</h1>
    </div>
    <div class="home__component">
      <h1>Компоненты форм</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections, DocumentStatus } from "@/types/types";
import type { ProfileStatus } from "@/types/types";

import { onMounted, onUnmounted, ref } from "vue";

import DocumentStatusIcon from "@/components/icons/DocumentStatusIcon.vue";
import ExitIconVue from "@/components/icons/menu/ExitIcon.vue";
import HomeIcon from "@/components/icons/menu/HomeIcon.vue";
import ManagementIcon from "@/components/icons/menu/ManagementIcon.vue";
import NotificationMenuIcon from "@/components/icons/menu/NotificationMenuIcon.vue";
import DatepickerIcon from "@/components/icons/filters/DatepickerIcon.vue";
import FilterIcon from "@/components/icons/filters/FilterIcon.vue";
import ArrowSwipePagesIcon from "@/components/icons/arrows/ArrowSwipePagesIcon.vue";
import SearchIcon from "@/components/icons/filters/SearchIcon.vue";
import FilterResetIcon from "@/components/icons/filters/FilterResetIcon.vue";
import ArrowFormIcon from "@/components/icons/arrows/ArrowFormIcon.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import HintIcon from "@/components/icons/HintIcon.vue";
import KosyginIDIcon from "@/components/icons/social/KosyginIDIcon.vue";
import VKIcon from "@/components/icons/social/VKIcon.vue";
import UnivIcon from "@/components/icons/social/UnivIcon.vue";
import TelegramIcon from "@/components/icons/social/TelegramIcon.vue";
import NotificationProfileIcon from "@/components/icons/NotificationProfileIcon.vue";
import ArrowListIcon from "@/components/icons/arrows/ArrowListIcon.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import StatusChoose from "@/components/StatusChoose.vue";
import ActionButton from "@/components/buttons/ActionButton.vue";
import SwitchButton from "@/components/buttons/SwitchButton.vue";
import DocumentButton from "@/components/buttons/DocumentButton.vue";
import PageSwitcher from "@/components/PageSwitcher.vue";
import EducationIcon from "@/components/icons/menu/EducationIcon.vue";
import EventsIcon from "@/components/icons/menu/EventsIcon.vue";
import ProfessorsIcon from "@/components/icons/menu/ProfessorsIcon.vue";
import ScienceIcon from "@/components/icons/menu/ScienceIcon.vue";
import ManyPeopleIcon from "@/components/icons/status/ManyPeopleIcon.vue";
import ExclamationHumanIcon from "@/components/icons/status/ExclamationHumanIcon.vue";
import CompleteHumanIcon from "@/components/icons/status/CompleteHumanIcon.vue";
import PlusHumanIcon from "@/components/icons/status/PlusHumanIcon.vue";
import CompleteIcon from "@/components/icons/status/CompleteIcon.vue";
import ExclamationIcon from "@/components/icons/status/ExclamationIcon.vue";
import GraphIcon from "@/components/icons/status/GraphIcon.vue";
import ThickButton from "@/components/buttons/ThickButton.vue";
import KosyginIDButton from "@/components/buttons/KosyginIDMenuButton.vue";
import CheckBox from "@/components/buttons/CheckBox.vue";
import VerticalMenuButtons from "@/components/buttons/VerticalMenuButtons.vue";
import FileButton from "@/components/buttons/FileButton.vue";
import FileDropDown from "@/components/FileDropDown.vue";
import VerticalMenu from "@/components/VerticalMenu.vue";
import Profile from "@/components/Profile.vue";
import CoinIcon from "@/components/icons/CoinIcon.vue";
import ScheduleDayCard from "@/components/schedule/ScheduleDayCard.vue";
import ScheduleEvent from "@/components/schedule/ScheduleEvent.vue";
import Input from "@/components/CustomInput.vue";
import CheckboxRounded from "@/components/buttons/CheckboxRounded.vue";
import Filter from "@/components/Filter.vue";
import NotificationCard from "@/components/NotificationCard.vue";
import CustomDatepicker from "@/components/CustomDatepicker.vue";
import DocumentStatusCard from "@/components/DocumentStatusCard.vue";
import SearchFilter from "@/components/SearchFilter.vue";
import SetterDocumentProfessor from "@/components/SetterDocumentProfessor.vue";
import Table from "@/components/table/Table.vue";
import KIDButton from "@/components/buttons/KIDButton.vue";
import Forms from "@/components/Forms.vue";
import SecurityIcon from "@/components/icons/menu/SecurityIcon.vue";
import MyDataIcon from "@/components/icons/menu/MyDataIcon.vue";
import OpenCloseIcon from "@/components/icons/security_KID/OpenCloseIcon.vue";
import UniversityLogo from "@/components/logos/UniversityLogo.vue";
import AnalyticsLogo from "@/components/logos/AnalyticsLogo.vue";
import ScheduleLogo from "@/components/logos/ScheduleLogo.vue";
import ActivityRatingLogo from "@/components/logos/ActivityRatingLogo.vue";
import PassportTableLogo from "@/components/logos/PassportTableLogo.vue";
import MoodleLogo from "@/components/logos/MoodleLogo.vue";
import TableFillRow from "@/components/table/TableFillRow.vue";
import TableProfessorEntry from "@/components/table/TableProfessorEntry.vue";

let timer: number;

const zalupa: Array<string> = [
  "Институт мехатроники и робототехники",
  "Технологический институт текстильной и легкой промышленности",
  "Институт химических технологий и промышленной экологии",
  "Институт информационных технологий и цифровой трансформации",
];

const zalupa2: Array<string> = ["2019 год", "2020 год", "2021 год", "2022 год"];

const currentStatus = ref<DocumentStatus>(DocumentStatus.processing);

const active = ref(false);

const arrayOfStatuses = ref<Array<ProfileStatus>>([
  {
    name: "Преподаватель",
  },
  {
    name: "Студент",
    default: true,
  },
  {
    name: "Оператор",
  },
  {
    name: "Администратор",
  },
]);

onMounted(() => {
  const statuses = Object.keys(DocumentStatus).filter((v) => !isNaN(Number(v)));
  let i = 0;
  timer = setInterval(() => {
    active.value = !active.value;
    currentStatus.value = i as DocumentStatus;
    if (i < statuses.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;

  &__component {
    background: #ffffff;
    border-radius: 50px;

    width: 100%;

    display: flex;
    flex-direction: column;

    & > * {
      padding: 25px 100px;
    }

    > h1 {
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      background-color: var(--background);

      font-weight: 500;
      font-size: 100px;
      line-height: 117px;
      color: var(--main-text);

      margin: 0;
    }

    > h3 {
      margin: 0;
      color: var(--main-text);
      font-weight: 700;
      font-size: 34px;
      line-height: 140%;
    }

    > h2 {
      font-weight: 500;
      font-size: 64px;
      line-height: 75px;
      color: #2b3674;
    }

    > p {
      color: var(--main-text);
    }

    > article {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0;
      > div {
        display: flex;
        flex-direction: row;
        gap: 25px;
        align-items: center;
        > div {
          width: 130px;
          height: 130px;
          border-radius: 100%;
        }
        > span {
          font-weight: 500;
          font-size: 32px;
          line-height: 140%;
          color: var(--main-text);
        }
      }
    }
  }
}
</style>
