<script
  setup
  lang="ts"
  generic="T extends Record<string | number | symbol, any>, R extends Record<keyof T, string | undefined | null>"
>
import { computed, onMounted, ref, type StyleValue } from "vue";
import type {
  TableRowMapper,
  TableColumnMapper,
  TableRowWidths,
  TableHeadType,
} from "./types";

const props = defineProps<{
  data: T | undefined;

  head: TableHeadType<R>;
  widths: Partial<TableRowWidths<R>>;

  rowMapper?: TableRowMapper<T, R>;
  columnMapper?: TableColumnMapper<T>;
}>();
const emit = defineEmits<{
  (event: "elementClick", ev: MouseEvent, data: R[keyof R] | undefined): void;
}>();

const mapped = ref<R | null>();

const isSkeleton = computed(() => mapped.value != undefined);
const isSkeletonElement = (key: keyof T) => mapped.value?.[key] == undefined;
const columnStyle: (key: keyof T) => StyleValue = (key) => ({
  width: props.widths[key] ?? "unset",
});

const setup = async () => {
  const temp: Partial<R> = {};
  for (let key in props.head) {
    temp[key] = undefined;
  }

  if (!props.data) return;

  let tempMapped: Partial<R> = {};

  if (props.rowMapper) {
    try {
      tempMapped = await props.rowMapper(props.data);
    } catch (err) {
      mapped.value = null;
      throw err;
    }
  } else {
    for (let key in props.head) {
      const temp =
        typeof props.data[key] == "object"
          ? JSON.stringify(props.data[key])
          : props.data[key];
      tempMapped[key] = temp as any;
    }
  }

  if (props.columnMapper) {
    for (let key in tempMapped) {
      const _data = props.data;
      const _mapped = tempMapped[key];
      const _value = _data[key];
      const _key = key as keyof R;

      tempMapped[_key] = undefined;

      (async () => {
        try {
          const temp = props.columnMapper!(_data, {
            field: _key,
            value: _value,
            mapped: _mapped,
          }) as Promise<R[keyof R]> | R[keyof R];

          if (temp instanceof Promise) {
            const result = await temp;
            mapped.value![_key] = result;
          } else {
            tempMapped[_key] = temp;
          }
        } catch (err) {
          (mapped.value![_key] as string | null | undefined) = null;
          throw err;
        }
      })();
    }
  }

  mapped.value = tempMapped as R;
};

onMounted(async () => {
  await setup();
});
</script>

<template>
  <div class="table__row" v-if="isSkeleton">
    <p
      class="table__text"
      v-for="(v, k, i) in head"
      :style="columnStyle(k as keyof T)"
      :class="{ skeleton: isSkeletonElement(k) }"
      @click="(ev) => emit('elementClick', ev, mapped?.[k as keyof R])"
    >
      {{ mapped?.[k as keyof R] }}
    </p>
  </div>
  <div class="table__row-skeleton skeleton" v-else></div>
</template>

<style scoped lang="scss">
.table__row {
  margin: 15px 0px 5px 0px;

  color: var(--main-text);
  display: flex;
  flex-direction: row;
  width: 100%;

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 15px;
  }

  &-skeleton {
    margin: 15px 0px 5px 0px;
    height: 16px;
  }
}
</style>
