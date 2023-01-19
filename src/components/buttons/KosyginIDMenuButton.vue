<template>
  <a href="https://www.example.com" style="text-decoration: none">
    <div class="kosygin-id__button" @click="">
      <button>
        <h5><KosyginIDIcon />Kosygin ID</h5>
        <p>Единый аккаунт для всех сервисов университета!</p>
      </button>
    </div>
  </a>
</template>

<script setup lang="ts">
import KosyginIDIcon from "../icons/social/KosyginIDIcon.vue";
</script>

<style scoped lang="scss">
.kosygin-id__button {
  > button {
    width: 170px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    > h5 {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #2b3674;

      margin: 0;
    }

    > p {
      font-weight: 400;
      font-size: 10px;
      line-height: 140%;
      color: #989898;

      text-align: start;

      margin: 0;
    }

    padding: 24px 20px 21px 27px;
    border: 1px solid white;

    background: #ffffff;
    box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
    border-radius: 15px;

    &:hover {
      border: 1px solid #016ae7;
    }
  }
}
</style>
