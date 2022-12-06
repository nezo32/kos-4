<template>
  <div class="walkthrough">
    <div class="icons">
      <HomeIcon />
      <ManagementIcon />
      <NotificationMenuIcon />
      <ExitIconVue />
      <EducationIcon />
      <EventsIcon />
      <ProfessorsIcon />
      <ScienceIcon />

      <ManyPeopleIcon />
      <ExclamationHumanIcon />
      <CompleteHumanIcon />
      <PlusHumanIcon />
      <CompleteIcon />
      <ExclamationIcon />
      <GraphIcon />

      <DocumentStatusIcon :status="currentStatus" />
      <DatepickerIcon />
      <FilterIcon />
      <SearchIcon />
      <FilterResetIcon />
      <div>
        <ArrowSwipePagesIcon
          :direciton="ArrowDirections.up"
        /><ArrowSwipePagesIcon :direciton="ArrowDirections.down" />
      </div>
      <div>
        <ArrowSwipePagesIcon
          :direciton="ArrowDirections.left"
        /><ArrowSwipePagesIcon :direciton="ArrowDirections.right" />
      </div>
      <div>
        <ArrowFormIcon :direciton="ArrowDirections.right" /><ArrowFormIcon
          :direciton="ArrowDirections.down"
        />
      </div>
      <CalendarIcon />
      <div><HintIcon :active="true" /> <HintIcon :active="false" /></div>
      <KosyginIDIcon />
      <VKIcon />
      <UnivIcon />
      <TelegramIcon />
      <NotificationProfileIcon :active="active" />
      <div>
        <ArrowListIcon :direciton="ArrowDirections.right" />
        <ArrowListIcon :direciton="ArrowDirections.down" />
      </div>
      <div>
        <CoinIcon color="gold" />
        <CoinIcon color="silver" />
        <CoinIcon color="bronze" />
      </div>
      <div>
        <CoinIcon color="gold" :small="true" />
        <CoinIcon color="silver" :small="true" />
        <CoinIcon color="bronze" :small="true" />
      </div>
    </div>
    <div class="components">
      <ScheduleEvent
        header="Все айтишники Университета Косыгина вместе идут смотреть на краисвых котов и кошечек"
        organaizer="Организатор: Студенческий совет"
        member-count="2 321 участника"
        event-status="Мероприятия завершено"
        date="08.09 - 11.09"
        event-img="../src/assets/img/biba.svg"
      />
      <Forms header="Наименование института" type="dropdown" />
      <Forms header="Наименование института" type="date" />
      <Forms type="input" />
      <p class="light__background">
        <Input theme="Фамилия" />
      </p>
      <CheckboxRounded />
      <CheckboxRounded :small="true" />
      <ScheduleDayCard
        day="Понедельник"
        :count-of-events="10"
        style="width: 730px"
      />
      <BreadCrumbs />
      <StatusChoose :statuses="arrayOfStatuses" />
      <ActionButton content="abiba" />
      <p class="light__background" style="width: 300px">
        <Filter :content="zalupa" />
      </p>
      <p class="light__background">
        <Filter :content="zalupa2" :date="true" />
      </p>

      <ActionButton content="abiba" :small="true" />
      <SwitchButton content="abiba" />
      <DocumentButton content="Сохранить изменения" color="blue" />
      <DocumentButton content="Очистить всё" color="red" />
      <ThickButton content="Подробнее" />
      <PageSwitcher :count-pages="99" />
      <KosyginIDButton />
      <CheckBox />
      <VerticalMenuButtons content="Программы" icon="home" url="/" />
      <VerticalMenuButtons
        content="Руководители ОП"
        icon="management"
        url="/management"
      />
      <FileButton content="Скачать список Xlsx" />
      <FileDropDown />
      <VerticalMenu />
      <Profile
        :notification-active="false"
        name="Попов Дмитрий"
        pfpUrl="../src/assets/img/biba.svg"
      />
    </div>
    <div class="components">
      <CustomDatepicker />
      <DocumentStatusCard status="Проверено" />
      <SearchFilter />
      <SetterDocumentProfessor
        :allowed="[
          'Иванов Максим Игоревич',
          'Кошалапов Ромин Дотович',
          'Бледный Иван Макарович',
          'Болбшой Иван Иванович',
        ]"
      />
      <KIDButton content="Далее" />
      <KIDButton content="Назад" />
    </div>
  </div>
  <div>
    <NotificationCard
      img="../src/assets/img/biba.svg"
      header="Внесение изменений РПД"
      desc="Заведующий кафедры автоматики и промышленной электроники - Поздянков Иван Геннадьевич внёс изменения в отклоненную рабочую программу дисциплины: Адаптивные информационные и коммуникационные технологии "
      how-long-ago="30 минут назад"
    />
    <Table header="ОПОП" />
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
import Input from "@/components/Input.vue";
import CheckboxRounded from "@/components/buttons/CheckboxRounded.vue";
import Filter from "@/components/Filter.vue";
import NotificationCard from "@/components/NotificationCard.vue";
import CustomDatepicker from "@/components/CustomDatepicker.vue";
import DocumentStatusCard from "@/components/DocumentStatusCard.vue";
import SearchFilter from "@/components/SearchFilter.vue";
import SetterDocumentProfessor from "@/components/SetterDocumentProfessor.vue";
import Table from "@/components/Table.vue";
import KIDButton from "@/components/buttons/KIDButton.vue";
import Forms from "@/components/Forms.vue";

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
.light__background {
  padding: 30px;
  background: rgba(255, 255, 255, 0.658);
}
.walkthrough {
  background: #e8d5ff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.components {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}
.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  > div {
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 15px;
  }
}
</style>
