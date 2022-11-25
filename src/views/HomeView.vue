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
    </div>
    <div class="components">
      <BreadCrumbs />
      <StatusChoose :statuses="arrayOfStatuses" />
      <ActionButton content="abiba" />
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
    <ServiceHeader
      subtitle="Программы"
      title="Основные образовательные программы"
    />
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
import KosyginIDButton from "@/components/buttons/KosyginIDButton.vue";
import CheckBox from "@/components/buttons/CheckBox.vue";
import VerticalMenuButtons from "@/components/buttons/VerticalMenuButtons.vue";
import FileButton from "@/components/buttons/FileButton.vue";
import FileDropDown from "@/components/FileDropDown.vue";
import VerticalMenu from "@/components/VerticalMenu.vue";
import Profile from "@/components/Profile.vue";
import ServiceHeader from "@/components/ServiceHeader.vue";

let timer: number;

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
.walkthrough {
  background: #f4f7fe;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.components {
  width: 50%;
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
