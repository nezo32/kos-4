<template>
  <Teleport to="body">
    <div
      class="modal"
      target_close
      @mousedown="down"
      @mouseup="up"
      ref="outerModal"
    >
      <div class="modal-inner" :small="props.small ?? false">
        <slot class="modal-inner__slot" />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import useDetectOutsideElementClick from "./detectOutsideElement";

const props = defineProps<{
  small?: boolean;
  activity: boolean;
}>();
const emit = defineEmits(["update:activity"]);

const isTargetDown = ref(false);

const outerModal = ref();

function down(ev: Event) {
  isTargetDown.value = false;
  const target = ev.target as HTMLDivElement;
  if (target.attributes.getNamedItem("target_close") == undefined) return;
  isTargetDown.value = true;
}

function up(ev: Event) {
  const target = ev.target as HTMLDivElement;
  if (
    target.attributes.getNamedItem("target_close") == undefined ||
    !isTargetDown.value
  )
    return;
  isTargetDown.value = false;
}

useDetectOutsideElementClick(outerModal, () => {
  emit("update:activity", false);
});

onMounted(() => {
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = "5px";
});
onUnmounted(() => {
  document.body.style.overflow = "auto";
  document.body.style.marginRight = "0px";
});
</script>

<style lang="scss">
.modal-inner {
  cursor: default;

  position: relative;

  background: #ffffff;
  box-shadow: 1px 2px 20px -2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 30px 4px 30px 34px;

  & > * {
    padding-right: 30px;

    max-height: calc(100vh - 130px);
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: white;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--unactive-text);
      border-radius: 5px;
    }
  }
}
</style>
