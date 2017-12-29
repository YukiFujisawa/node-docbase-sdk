import { DocBaseEntity } from '../entities/DocBaseEntity';

export namespace MemoConditionFields {
  export type q = string;
  export type page = number;
  export type perPage = number;
}

export interface MemoCondition extends DocBaseEntity {
  q: MemoConditionFields.q;
  page: MemoConditionFields.page;
  perPage: MemoConditionFields.perPage;
}
