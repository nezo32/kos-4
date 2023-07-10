export type TablePaginationOrderObject<R> = {
  field: keyof R;
  direciton: "asc" | "desc";
};

export type TablePaginationFunc<T, R> = (
  page: number,
  maxElements: number,
  search?: string,
  order?: TablePaginationOrderObject<R>
) => Promise<{ elements: T[]; pages: number }>;

export type TableHeadObject = {
  width: `${number}%` | `${number}px`;
  title: string;
};

export type TableHeadType<R> = {
  [field in keyof R]: string | TableHeadObject;
};

export type TableRowMapper<T, R> = (el: T) => R | Promise<R>;

export type TableColumnMapperColumnObject<T, F extends keyof T> = {
  field: F;
  value: T[F];
  mapped: string | undefined | null;
};

export type TableColumnMapper<T, F extends keyof T = keyof T> = (
  el: T,
  column: TableColumnMapperColumnObject<T, F>
) => string | Promise<string> | undefined | null;

export type TableRowWidths<R> = {
  [field in keyof R]: string | `${number}%` | `${number}px`;
};
