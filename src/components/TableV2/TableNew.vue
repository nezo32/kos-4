<script
  setup
  lang="ts"
  generic="T extends Record<string, any> & {id: string | number}, R extends Record<keyof T, string | undefined | null>"
>
import ArrowSwipePagesIcon from "../icons/arrows/ArrowSwipePagesIcon.vue";
import SearchFilter from "../SearchFilter.vue";
import FileDropDown from "../FileDropDown.vue";
import PageSwitcher from "../PageSwitcher.vue";
import TableRow from "./TableRow.vue";
import {
  computed,
  onMounted,
  ref,
  shallowRef,
  triggerRef,
  watch,
  type StyleValue,
} from "vue";
import type {
  TablePaginationFunc,
  TableHeadType,
  TableRowMapper,
  TableColumnMapper,
  TableRowWidths,
  TableHeadObject,
} from "./types";
import type { CancelablePromise } from "cancelable-promise";
import { cancelable } from "cancelable-promise";

const props = defineProps<{
  title: string | undefined;
  subtitle: string | undefined;
  maxElements?: number;

  head: TableHeadType<R>;

  rowMapper?: TableRowMapper<T, R>;
  columnMapper?: TableColumnMapper<T>;
  pagination: TablePaginationFunc<T, R>;
}>();

const getMaxElements = computed(() => props.maxElements ?? 15);

const page = defineModel("page", {
  default: 1,
});
const pages = ref<number>();

const search = defineModel("search", {
  default: "",
});

const orders = shallowRef<Partial<Record<keyof T, 0 | 1>>>({});
const targetOrder = ref<{ field: keyof T; value: 0 | 1 }>();

const widths = ref<Partial<TableRowWidths<R>>>({});
const content = shallowRef<(T | undefined)[]>([]);

const showPagination = ref(false);
const promise = ref<CancelablePromise<any>>();

const sort = (key: keyof T) => {
  for (let keys in orders.value) {
    if (keys == key) continue;
    orders.value[keys] = 1;
  }
  orders.value[key] = orders.value[key] == 0 ? 1 : 0;
  targetOrder.value = {
    field: key,
    value: orders.value[key],
  };
  triggerRef(orders);
};

const columnStyle: (key: keyof T) => StyleValue = (key) => ({
  width: (widths.value as any)[key] ?? "unset",
});

async function paginate() {
  content.value = new Array(getMaxElements.value).map((el) => undefined);

  if (promise.value) {
    promise.value.cancel();
  }

  promise.value = cancelable(
    props.pagination(
      page.value,
      getMaxElements.value,
      search.value,
      targetOrder.value
        ? {
            field: targetOrder.value!.field,
            direciton: targetOrder.value?.value == 0 ? "desc" : "asc",
          }
        : undefined
    )
  );

  const res = await promise.value;

  pages.value = res.pages;
  content.value = res.elements;
  showPagination.value = true;
}

watch([page, search, targetOrder], async () => await paginate());

onMounted(async () => {
  const tempWidths: Partial<TableRowWidths<R>> = {};
  const tempOrders: Partial<Record<keyof T, 0 | 1 | undefined>> = {};
  for (let key in props.head) {
    tempWidths[key] =
      (props.head[key] as TableHeadObject)?.width ??
      `${100 / Object.keys(props.head).length}%`;
    tempOrders[key] = 1;
  }
  widths.value = tempWidths as any;
  orders.value = tempOrders as any;
  targetOrder.value = {
    field: Object.keys(props.head)[0],
    value: 1,
  };

  await paginate();
});
</script>

<template>
  <div class="table">
    <div class="table__hat">
      <article>
        <h5 v-if="subtitle" class="table__text">{{ subtitle }}</h5>
        <h2 v-if="title" class="table-card__header">{{ title }}</h2>
      </article>
      <section>
        <SearchFilter v-model="search" />
        <FileDropDown>
          <slot />
        </FileDropDown>
      </section>
    </div>
    <div class="table__content">
      <div class="table__content__header">
        <p
          class="breadcrumbs__text"
          v-for="(v, k, i) in head"
          :key="(v as any)?.id ?? i"
          :style="columnStyle(k as any)"
        >
          {{ (v as any)?.title ?? v }}
          <ArrowSwipePagesIcon
            :direciton="((orders[k as keyof typeof orders] ?? 1) as any)"
            @click="sort(k as any)"
          />
        </p>
      </div>
      <div class="table__content__body">
        <TableRow
          v-for="(v, i) of content"
          :key="v?.id ?? i"
          :data="v"
          :head="(head as any)"
          :widths="(widths as any)"
          :column-mapper="columnMapper"
          :row-mapper="rowMapper"
        />
      </div>
    </div>
    <div class="table__footer">
      <PageSwitcher :count-pages="pages" v-model:current-page="page" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.table {
  &__content {
    width: 100%;
    &__header {
      border-bottom: 2px solid var(--background, #f4f7fe);

      display: flex;
      flex-direction: row;
      > p {
        margin-left: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
      }
      color: var(--unactive-text);
    }
  }

  &__hat {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > article {
      display: flex;
      flex-direction: column;
      gap: 8px;

      > h5 {
        color: var(--unactive-text);
      }
    }
    > section {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  }

  color: var(--main-text);
  padding: 20px 20px 20px 30px;
  border-radius: 20px;
  background: var(--white, #fff);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
}
</style>
