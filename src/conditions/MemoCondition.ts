import { DocBaseEntity } from '../entities/DocBaseEntity';

export namespace MemoConditionFields {
  export type q = string;
  export type page = number;
  export type per_page = number;
}

export interface MemoCondition extends DocBaseEntity {
  q: MemoConditionFields.q;
  page: MemoConditionFields.page;
  per_page: MemoConditionFields.per_page;
}
