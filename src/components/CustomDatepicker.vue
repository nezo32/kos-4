<template>
  <div class="schedule__datepicker">
    <Datepicker
      v-model="date"
      ref="datepicker"
      locale="ru"
      @internalModelChange="dateHandler"
      :inline="true"
      :transitions="{ open: `false` }"
      :day-class="markDays"
      :show-now-button="showNowButton ? true : false"
      :month-change-on-scroll="false"
    >
      <template #now-button="{ selectCurrentDate }">
        <div class="dp__now_wrap_wrap">
          <div @click="selectCurrentDate()" class="dp__now_button">
            Текущий день
          </div>
        </div>
      </template>
    </Datepicker>
  </div>
</template>

<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import { ref, onMounted } from "vue";

function dateString(d: Date) {
  return d.toISOString().split("T")[0];
}

function markDays(date: Date): string {
  if (!props.dates) return "";
  const tmp = new Date(date);
  tmp.setDate(tmp.getDate() + 1);
  if (props.dates.map((el) => dateString(el)).includes(dateString(tmp)))
    return "pairs-exist";
  else return "";
}

const props = defineProps<{
  date: Date;
  dates?: Date[];
  showNowButton?: boolean;
}>();
const emit = defineEmits(["update:date"]);

const date = ref<Date | null>(null);
const datepicker = ref();
/* const cmptd = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: Date) {
    console.log("newValue", newValue);
    emit("update:modelValue", newValue);
  },
}); */

const dateHandler = (date: Date) => {
  emit("update:date", date);
};

onMounted(() => {
  /* setInterval(() => {
    cmptd.value = new Date();
  }, 100);
  */
  if (datepicker) {
    datepicker.value?.updateInternalModelValue(new Date());
  }
});
</script>

<style lang="scss">
.pairs-exist {
  color: var(--resolved) !important;
}

.dp__theme_light {
  --dp-border-color: rgba(0, 0, 0, 0) !important;
  --dp-menu-border-color: rgba(0, 0, 0, 0) !important;
}

.dp__now_wrap {
  padding: 0px 14px 15px 14px !important;

  &_wrap {
    > .dp__now_button {
      box-sizing: border-box;
      padding: 12px;
      text-align: center;
      width: 100%;
      border: 2px solid var(--elements);
      border-radius: 10px;

      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: var(--elements);

      cursor: pointer;

      &:hover {
        background: var(--elements);
        color: var(--white);
      }
    }
  }
}

.schedule__datepicker {
  width: 300px;
  height: 300px;

  .dp__month_year_select {
    &:hover {
      background: var(--background);
    }
  }

  .dp__overlay_cell {
    &:hover {
      background: var(--background);
    }
  }

  .dp__month_year_row {
    padding-top: 30px !important;
    padding-bottom: 15px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    margin-bottom: 5px;
  }

  .dp__menu {
    margin: 0;

    font-family: "Roboto";
    border: none;
    border-radius: 10px;
  }

  .dp__action_row {
    display: none !important;
  }

  .dp__flex_display {
    display: block;
  }

  .dp__calendar_item {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-shrink: none;

    width: 26px;
    height: 26px;
  }

  .dp__overlay_cell_active {
    background: var(--rejected);
  }

  .dp__cell_inner {
    width: 26px;
    height: 26px;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    text-align: center;

    border: none;
  }

  .dp__calendar_header {
    gap: 15px;
    margin-bottom: 3px;
  }

  .dp__calendar_wrap .dp__calendar_header_item {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    width: 26px;
    height: 26px;

    color: #a3aed0;
  }

  .dp__calendar {
    padding-bottom: 5px;
  }

  .dp__calendar_row {
    width: 100%;
    gap: 15px;
    margin: 15px 0px;
  }

  .dp__active_date {
    background: #ff2d52 !important;
    color: white !important;
  }

  .dp__date_hover:hover {
    border-radius: 50%;
    background: white;
    color: #ff2d52;
  }

  .dp__active_date {
    border-radius: 50%;
  }

  .dp__today {
    border: none;
    border-radius: 50%;
    background: none;
    color: #2b3674;
  }

  .dp__theme_light {
    --dp-text-color: #2b3674 !important;
    --dp-hover-text-color: #2b3674 !important;
    --dp-secondary-color: #a3aed0 !important;
  }

  .dp__calendar_wrap {
    font-family: "Roboto" !important;
    font-style: normal;

    padding: 0 14px;
  }

  .dp__main {
    width: 300px;
    height: 300px;
  }

  .dp__button {
    display: none;
  }
  .dp__calendar_header_separator {
    display: none;
  }
}

@import "@/assets/sass/mobile_datepicker.scss";
</style>
