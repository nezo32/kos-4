<template>
  <div class="datepicker">
    <Datepicker locale="ru" :inline="true" :transitions="{ open: `false` }" />
  </div>
</template>

<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
</script>

<style lang="scss">
.datepicker {
  width: 300px;
  height: 300px;

  .dp__month_year_row {
    padding: 0px 28px;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }

  .dp__menu {
    font-family: "Roboto";
    border: none;
    border-radius: 10px;
  }

  .dp__flex_display {
    display: block;
  }

  .dp__calendar_item {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-shrink: none;

    width: 27px;
    height: 27px;
  }

  .dp__cell_inner {
    width: 27px;
    height: 27px;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    padding: 4px;

    border: none;
  }

  .dp__calendar_header {
    gap: 4px;
  }

  .dp__calendar_header_item {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;

    height: 22px;

    color: #989898;
  }

  .dp__calendar {
    padding-bottom: 12px;
  }

  .dp__calendar_row {
    width: 100%;
    gap: 12px;
    margin: 12px 0px;
  }

  .dp__active_date {
    background: #ff2d52;
  }

  .dp__date_hover:hover {
    border-radius: 50%;
    background: #ff2d52;
    color: white;
  }

  .dp__active_date {
    border-radius: 50%;
  }

  .dp__today {
    border: none;
    border-radius: 50%;
    background: #ff2d52;
    color: white;
  }

  .dp__theme_light {
    --dp-text-color: #2b3674 !important;
    --dp-hover-text-color: #2b3674 !important;
    --dp-secondary-color: #a3aed0 !important;
  }

  .dp__calendar_wrap {
    font-family: "Roboto" !important;
    font-style: normal;
  }

  .dp__main {
    width: 300px;
    height: 300px;
  }

  .dp__action_row {
    display: none;
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
