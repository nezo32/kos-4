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
      <h3>Иконки меню</h3>
      <section>
        <label style="color: var(--elements)">
          <HomeIcon />
          <ManagementIcon />
          <NotificationMenuIcon />
          <ExitIcon />
          <EducationIcon />
          <EventsIcon />
          <ProfessorsIcon />
          <ScienceIcon />
          <SecurityIcon />
          <MyDataIcon />
        </label>
        <label style="color: var(--unactive-text)">
          <HomeIcon />
          <ManagementIcon />
          <NotificationMenuIcon />
          <ExitIcon />
          <EducationIcon />
          <EventsIcon />
          <ProfessorsIcon />
          <ScienceIcon />
          <SecurityIcon />
          <MyDataIcon />
        </label>
      </section>
      <h3>Иконки статуса документа</h3>
      <section><DocumentStatusIcon :status="currentStatus" /></section>
      <h3>Дополнительные иконки</h3>
      <section>
        <label>
          <DatepickerIcon />
          <FilterIcon />
          <SearchIcon />
          <FilterResetIcon />
        </label>
        <label>
          <ArrowSwipePagesIcon :direciton="ArrowDirections.left" />
          <ArrowSwipePagesIcon :direciton="ArrowDirections.right" />
          <ArrowSwipePagesIcon :direciton="ArrowDirections.up" />
          <ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
          <CalendarIcon
            style="color: var(--unactive-text); width: 20px; height: 20px"
          />
        </label>
      </section>
      <section>
        <label>
          <ArrowFormIcon :direciton="ArrowDirections.down" />
          <ArrowFormIcon :direciton="ArrowDirections.left" />
          <CalendarIcon style="color: var(--black)" />
          <section><HintIcon active /> <HintIcon /></section>
        </label>
        <label>
          <KosyginIDIcon />
          <VKIcon />
          <UnivIcon />
          <TelegramIcon />
        </label>
      </section>
      <section>
        <ManyPeopleIcon />
        <ExclamationHumanIcon />
        <PlusHumanIcon />
        <CompleteHumanIcon />
        <CompleteIcon />
        <ExclamationIcon />
        <GraphIcon />
      </section>
      <ChangeProfilePictureIcon />
      <section>
        <PhoneSecurityIcon />
        <LockSecurityIcon />
        <ShieldSecurityIcon />
        <PCSecurityIcon />
        <SettingsSecurityIcon />
        <OpenCloseIcon type="open" />
        <OpenCloseIcon type="close" />
      </section>
      <section>
        <HumanScheduleIcon />
        <LocationScheduleIcon />
        <StarScheduleIcon />
        <PeopleScheduleIcon />
        <SubdivisionScheduleIcon />
        <DotScheduleIcon color="green" />
        <DotScheduleIcon color="red" />
        <RoundedPlusScheduleIcon />
        <EventScheduleIcon />
      </section>
      <h3>Логотип университета</h3>
      <section>
        <label>
          <KosyginLogo />
          <FooterLogo />
        </label>
      </section>
      <h3>Иконки выбора статуса</h3>
      <section>
        <label>
          <NotificationProfileIcon :active="active" />
        </label>
        <label>
          <ArrowListIcon :direciton="ArrowDirections.right" />
          <ArrowListIcon :direciton="ArrowDirections.down" />
        </label>
      </section>
      <h3>Иконки монет</h3>
      <section>
        <label>
          <CoinIcon color="gold" />
          <CoinIcon color="silver" />
          <CoinIcon color="bronze" />
        </label>
        <label>
          <CoinIcon color="gold" small />
          <CoinIcon color="silver" small />
          <CoinIcon color="bronze" small />
        </label>
      </section>
      <h3>Логотипы сервисов</h3>
      <section>
        <label>
          <section>
            <UniversityLogo type="large" />
            <AnalyticsLogo type="large" />
            <ActivityRatingLogo type="large" />
            <PassportTableLogo type="large" />
            <MoodleLogo type="large" />
          </section>
          <section>
            <UniversityLogo type="small" />
            <AnalyticsLogo type="small" />
            <ActivityRatingLogo type="small" />
            <PassportTableLogo type="small" />
            <MoodleLogo type="small" />
          </section>
        </label>
      </section>
      <h3>Логотипы браузеров</h3>
      <section>
        <ChromeLogo />
        <EdgeLogo />
        <FirefoxLogo />
        <IELogo />
        <OperaLogo />
        <SafariLogo />
        <TorLogo />
        <UCLogo />
        <YandexLogo />
      </section>
    </div>
    <div class="home__component">
      <h1>Хлебные крошки</h1>
      <section><Breadcrumbs :path="[{ name: ' ', path: '/' }]" /></section>
    </div>
    <div class="home__component">
      <h1>Выбор статуса</h1>
      <section>
        <Profile
          :statuses="[{ name: 'test', default: true }, { name: 'testaboba' }]"
          :path="url"
          :notification-active="active"
          pfp-url="https://remote-tools-images.s3.amazonaws.com/best+discord+pfp/blog+12/anime/anime/1+(1).jpg"
          name="Попов Дмитрий"
        />
      </section>
    </div>
    <div class="home__component">
      <h1>Календарь</h1>
      <CustomDatepicker :date="date" :dates="dates" :show-now-button="true" />
    </div>
    <div class="home__component">
      <h1>Кнопки</h1>
      <section>
        <ActionButton content="Назначить" />
        <ActionButton content="Назначить" small />
      </section>
      <section>
        <ThickButton content="Подробнее" />
      </section>
      <section>
        <KIDButton content="Далее" general />
        <KIDButton content="Назад" />
      </section>
      <section>
        <SwitchButton content="content" />
      </section>
      <section>
        <DocumentButton content="Сохранить изменения" color="blue" />
        <DocumentButton content="Очистить всё" color="red" />
      </section>
      <section>
        <CheckBox :active="activetest" @click="activetest = !activetest" />
        <CheckboxRounded
          :active="activetest"
          @click="activetest = !activetest"
        />
        <CheckboxRounded
          :active="activetest"
          @click="activetest = !activetest"
          small
        />
      </section>
      <section>
        {{ curPage }}
        <PageSwitcher v-model:current-page="curPage" :count-pages="10" />
      </section>
      <section>
        <FileDropDown :content="params" />
      </section>
    </div>
    <div class="home__component">
      <h1>Вертикальное меню</h1>
      <section style="height: 1000px; background: black">
        <VerticalMenu>
          <VerticalMenuButtons content="Программы" icon="home" url="/" />
          <VerticalMenuButtons
            content="Общее расписание"
            icon="management"
            url="/management"
          />
          <VerticalMenuButtons
            content="Уведомления"
            icon="notification"
            url="/notifications"
          />
          <VerticalMenuButtons content="Выход" icon="exit" url="/logout" />
        </VerticalMenu>
      </section>
    </div>
    <div class="home__component">
      <h1>Расписание</h1>
      <section>
        <label>
          <ScheduleEventCard
            event-img="https://remote-tools-images.s3.amazonaws.com/best+discord+pfp/blog+12/anime/anime/1+(1).jpg"
            date="08.09 - 11.09"
            event-status="Мероприятие завершено"
            member-count="2321 участника"
            organaizer="Студенческий совет"
            header="Все айтишники Университета Косыгина вместе идут смотреть на краисвых котов и кошечек"
          />
          <ScheduleDayCard
            day="Понедельник"
            subtitle="aboba"
            :content="event"
            v-model:is-opened="bool"
          />
        </label>
      </section>
    </div>
    <div class="home__component">
      {{ permission }}
      <h1>Шапка сервиса</h1>
      <ServiceHeader
        v-model="permission"
        title="Основные образовательные программы"
        :statuses="[{ name: 'test', default: true }, { name: 'testaboba' }]"
      />
    </div>
    <div class="home__component">
      <h1>Блок фильтров</h1>
      <section>
        <Filter
          date
          :trigger="bool"
          placeholder="Институт"
          v-model="checkDate"
        />
        <Filter
          :content="zalupa"
          :trigger="bool"
          placeholder="Институт"
          v-model="input2"
        />
        <SearchFilter v-model="input3" :disabled="true" />
        <SearchFilter
          :content="zalupa"
          :trigger="bool"
          v-model="input3"
          radius="20"
        />
        {{ input2 }}
        {{ bool }}
        <FilterResetIcon @click="bool = !bool" style="flex-shrink: 0" />
      </section>
    </div>
    <div class="home__component">
      <h1>Уведомления</h1>
      <section>
        <NotificationCard
          img="https://remote-tools-images.s3.amazonaws.com/best+discord+pfp/blog+12/anime/anime/1+(1).jpg"
          how-long-ago="30 минут назад"
          header="Внесение изменнеий РПД"
          desc="Заведующий кафедры автоматики и промышленной электроники - Поздянков Иван Геннадьевич внёс изменения в отклоненную рабочую программу дисциплины: Адаптивные информационные и коммуникационные технологии "
        />
      </section>
    </div>
    <div class="home__component">
      <h1>Инпуты</h1>
      <section>
        <CustomInput theme="bebra" :v-model="input1" disabled />
        <!-- <Test :activity="true" small>
          <CustomInput date v-model="checkDate" theme="Дата" style="width: 400px" />
        </Test> -->
        {{ ip }}
        <CustomInputDropdown
          theme="Фамилия"
          :content="bebra"
          dropdown
          v-model="input1"
          v-model:is-opened="isOpened"
        />
        {{ input1 }}
        {{ isOpened }}
      </section>
    </div>
    <div class="home__component">
      <h1>Таблицы</h1>
      <div style="background-color: var(--background); border-radius: 50px">
        <Table
          v-model:current-page="curPage"
          title="ОПОП"
          :headers="head"
          :content="cont"
          subtitle="aboba"
          :pages="1"
        >
          <FileButton content="aboba" />
        </Table>
      </div>
    </div>
    <div class="home__component">
      <h1>Новая таблица</h1>
      <p style="background-color: var(--background); border-radius: 50px">
        <TableNew
          @row-click="testEmit"
          :column-mapper="testCMapper"
          v-model:page="page"
          :pagination="test"
          :head="{
            date_created: 'bebra',
            name: 'bobra',
            department: 'barabobra',
          }"
          title="Основная образовательная программа"
          subtitle="2023 год"
        />
      </p>
    </div>
    <div class="home__component">
      <h1>Компоненты форм</h1>
      <Forms type="date" :content="zalupa" v-model="forms1" />
      <Forms
        type="dropdown"
        header="Наименование института"
        :content="zalupa"
        v-model="forms1"
      />
      <Forms type="input" :content="zalupa" v-model="forms1" />
      <Forms
        type="multi"
        header="Наименование института"
        :content="zalupa"
        v-model="forms2"
        date
      />
      {{ forms1 }}
      {{ forms2 }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDirections, DocumentStatus, type ScheduleEvent } from "@/@types";
import type { ProfileStatus } from "@/@types";
import { Directus } from "@directus/sdk";
import type { CustomDirectusTypes, Teachers } from "@/@types/direbobus";
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import TableNew from "@/components/TableV2/TableNew.vue";
import EventScheduleIcon from "@/components/icons/schedule/EventScheduleIcon.vue";
import DocumentStatusIcon from "@/components/icons/DocumentStatusIcon.vue";
import ExitIcon from "@/components/icons/menu/ExitIcon.vue";
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
import Breadcrumbs from "@/components/BreadCrumbs.vue";
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
import ScheduleEventCard from "@/components/schedule/ScheduleEvent.vue";
import CheckboxRounded from "@/components/buttons/CheckboxRounded.vue";
import Filter from "@/components/Filter.vue";
import NotificationCard from "@/components/NotificationCard.vue";
import CustomDatepicker from "@/components/CustomDatepicker.vue";
import DocumentStatusCard from "@/components/DocumentStatusCard.vue";
import SearchFilter from "@/components/SearchFilter.vue";
import SetterDocumentProfessor from "@/components/SetterDocumentProfessor.vue";
import Table from "@/components/table/Table.vue";
import KIDButton from "@/components/buttons/KIDButton.vue";
import Forms from "@/components/forms/Forms.vue";
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
import ChangeProfilePictureIcon from "@/components/icons/ChangeProfilePictureIcon.vue";
import PhoneSecurityIcon from "@/components/icons/security_KID/PhoneSecurityIcon.vue";
import LockSecurityIcon from "@/components/icons/security_KID/LockSecurityIcon.vue";
import ShieldSecurityIcon from "@/components/icons/security_KID/ShieldSecurityIcon.vue";
import PCSecurityIcon from "@/components/icons/security_KID/PCSecurityIcon.vue";
import SettingsSecurityIcon from "@/components/icons/security_KID/SettingsSecurityIcon.vue";
import HumanScheduleIcon from "@/components/icons/schedule/HumanScheduleIcon.vue";
import LocationScheduleIcon from "@/components/icons/schedule/LocationScheduleIcon.vue";
import StarScheduleIcon from "@/components/icons/schedule/StarScheduleIcon.vue";
import PeopleScheduleIcon from "@/components/icons/schedule/PeopleScheduleIcon.vue";
import SubdivisionScheduleIcon from "@/components/icons/schedule/SubdivisionScheduleIcon.vue";
import DotScheduleIcon from "@/components/icons/schedule/DotScheduleIcon.vue";
import RoundedPlusScheduleIcon from "@/components/icons/schedule/RoundedPlusScheduleIcon.vue";
import KosyginLogo from "@/components/logos/KosyginLogo.vue";
import FooterLogo from "@/components/logos/FooterLogo.vue";
import ChromeLogo from "@/components/logos/browsers/ChromeLogo.vue";
import EdgeLogo from "@/components/logos/browsers/EdgeLogo.vue";
import FirefoxLogo from "@/components/logos/browsers/FirefoxLogo.vue";
import IELogo from "@/components/logos/browsers/IELogo.vue";
import OperaLogo from "@/components/logos/browsers/OperaLogo.vue";
import SafariLogo from "@/components/logos/browsers/SafariLogo.vue";
import TorLogo from "@/components/logos/browsers/TorLogo.vue";
import UCLogo from "@/components/logos/browsers/UCLogo.vue";
import YandexLogo from "@/components/logos/browsers/YandexLogo.vue";
import KosyginIDMenuButton from "@/components/buttons/KosyginIDMenuButton.vue";
import ServiceHeader from "@/components/ServiceHeader.vue";
import CustomInput from "@/components/CustomInput.vue";
import FormsMultipleDropdown from "@/components/forms/FormsMultipleDropdown.vue";
import CustomInputDropdown from "@/components/CustomInputDropdown.vue";
import type {
  TableColumnMapper,
  TablePaginationFunc,
} from "@/components/TableV2/types";
import type { DefaultItem } from "@directus/sdk";

const testCMapper: TableColumnMapper<DefaultItem<Teachers>> | undefined = (
  el,
  col
) => {
  if (col.field != "department") {
    //console.log(col.mapped);
    return col.mapped;
  }

  return new Promise(async (resolve, rej) => {
    const dir = new Directus<CustomDirectusTypes>("http://localhost:8055/");
    await dir.auth.static("A7_HCIbWbOuODbrXv4dV0bHKI_e-4wr5");
    const dep = await dir.items("departments").readOne(el.department as string);
    setTimeout(() => resolve(dep?.name ?? "aboba"), 1000);
  });
};

const testEmit = (data: DefaultItem<Teachers>) => {
  console.log("bebra");
  console.log(data);
};

const test: TablePaginationFunc<
  DefaultItem<Teachers>,
  Record<string, string>
> = async (page, maxElements, search, order) => {
  const dir = new Directus<CustomDirectusTypes>("http://localhost:8055/");
  await dir.auth.static("A7_HCIbWbOuODbrXv4dV0bHKI_e-4wr5");
  //console.log("zalupa");
  const zalupa = await dir
    .items("teachers")
    .readByQuery({ limit: maxElements, page, meta: "filter_count" });
  const res = {
    elements: zalupa.data ?? [],
    pages: Math.ceil((zalupa.meta?.filter_count ?? 0) / maxElements),
  };
  //console.log(res);
  return new Promise((resolve, rej) => {
    setTimeout(() => resolve(res), 1000);
  });
};

const router = useRouter();

const date = ref(new Date());

const isOpened = ref(false);

const activetest = ref(false);

const ip = ref<string>("1230");

let timer: number;

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const the_day_after_tomorrow = new Date();
the_day_after_tomorrow.setDate(the_day_after_tomorrow.getDate() + 2);

const dates = [new Date(), tomorrow, the_day_after_tomorrow];

const bebra = ref([
  "bebra",
  "bobra",
  "barabobra",
  "barabobra",
  "barabobra",
  "barabobra",
  "barabobra",
]);

const event = ref<Array<ScheduleEvent>>([
  {
    date: "10:30 - 11:50",
    eventImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leopard_in_the_Colchester_Zoo.jpg/1200px-Leopard_in_the_Colchester_Zoo.jpg",
    eventStatus: "a",
    header: "a",
    memberCount: "a",
    organaizer: "a",
    schedule: true,
  },
  {
    date: "10:30 - 11:50",
    eventImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leopard_in_the_Colchester_Zoo.jpg/1200px-Leopard_in_the_Colchester_Zoo.jpg",
    eventStatus: "a",
    header: "a",
    memberCount: "a",
    organaizer: "a",
    schedule: true,
  },
  {
    date: "10:30 - 11:50",
    eventImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leopard_in_the_Colchester_Zoo.jpg/1200px-Leopard_in_the_Colchester_Zoo.jpg",
    eventStatus: "a",
    header: "a",
    memberCount: "a",
    organaizer: "a",
    schedule: true,
  },
]);
const curPage = ref(1);

const url = ref("https://example.com");

const tommorrow = new Date();
tommorrow.setDate(tommorrow.getDate() + 6);
//console.log(tommorrow);

const checkDate = ref<string | Date[]>([new Date(), tommorrow]);
//console.log(checkDate.value);
watch(checkDate, () => {
  //console.log(checkDate.value);
});

const input1 = ref<string>("bebra");
const input2 = ref("аыфаыфва");
const input3 = ref("fasdfsadf");

const bool = ref(false);

const forms1 = ref("");
const forms2 = ref();

const permission = ref("aaaa");

const params = ref(["Скачать", "Редактировать"]);
const head = ref([
  "Код",
  "Направление подготовки",
  "Профиль",
  "Уровень",
  "Форма",
  "Заполнено",
]);
const content = ref([
  "Рабочая программа дисциплины",
  "Рабочая программа дисциплины",
  "Рабочая программа дисциплины",
]);
/* const cont = ref([
  [
    "38.03.04",
    "1",
    "Проектирование и художественное оформление трикотажных изделий",
    "Ассистент-стажер",
    "Очно-заочная",
    "Назначить",
  ],
  [
    "38.03.04",
    "1",
    "Проектирование и художественное оформление трикотажных изделий",
    "Ассистент-стажер",
    "Очно-заочная",
    "100%",
  ],
  [
    "38.03.04",
    "Технология полиграфического и упаковочного производства",
    "Проектирование и художественное оформление трикотажных изделий",
    "Ассистент-стажер",
    "Очно-заочная",
    "99%",
  ],
  [
    "38.03.04",
    "1",
    "Проектирование и художественное оформление трикотажных изделий",
    "Ассистент-стажер",
    "Очно-заочная",
    "100%",
  ],
]); */
const cont = ref([]);

const zalupa: Array<string> = [
  "Институт мехатроники и робототехники",
  "Технологический институт текстильной и легкой промышленностиТехнологический институт текстильной и легкой промышленностипромышленностиТехнологический институт текстильной и легкой промышленности",
  "Институт химических технологий и промышленной экологии",
  "Институт информационных технологий и цифровой трансформации",
  "Институт информационных технологий и цифровой трансформации",
  "Институт информационных технологий и цифровой трансформации",
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

const page = ref(1);

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
    background: var(--white);
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

    article {
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
          width: 300px;

          font-weight: 500;
          font-size: 32px;
          line-height: 140%;
          color: var(--main-text);
        }
      }
    }

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
  }
}
</style>
