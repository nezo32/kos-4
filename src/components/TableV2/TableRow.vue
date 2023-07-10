<script
  setup
  lang="ts"
  generic="T extends Record<string, any>, R extends Record<keyof T, string | undefined | null>"
>
import { computed, onMounted, onUpdated, ref, type StyleValue } from "vue";
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

const mapped = ref<R | null>();

const isSkeleton = computed(() => mapped.value != undefined);
//@ts-ignore
const isSkeletonElement = (key: string) => mapped.value[key] == undefined;
const columnStyle: (key: keyof T) => StyleValue = (key) => ({
  width: props.widths[key] ?? "unset",
});

const setup = async () => {
  const temp: Partial<R> = {};
  for (let key in props.head) {
    temp[key] = undefined;
  }
  // mapped.value = temp as R;

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
            field: _key as any,
            value: _value,
            mapped: _mapped,
          }) as Promise<R[keyof R]> | R[keyof R];

          if (temp instanceof Promise) {
            const result = await temp;
            //@ts-ignore
            mapped.value[_key] = result;
          } else {
            tempMapped[_key] = temp;
          }
        } catch (err) {
          //@ts-ignore
          mapped.value[_key] = null;
          throw err;
        }
      })();
    }
  }

  mapped.value = tempMapped as R;

  console.log(tempMapped);
};

/* onUpdated(async () => {
  await setup();
}); */
onMounted(async () => {
  await setup();
});
</script>

<template>
  <div class="table__row" v-if="isSkeleton">
    <p
      class="table__text"
      v-for="(v, k, i) in head"
      :style="columnStyle(k as any)"
      :class="{ skeleton: isSkeletonElement(k as any) }"
    >
      {{ (mapped as any)[k] }}
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
