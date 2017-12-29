import { DocBaseEntity } from '../entities/DocBaseEntity';
export declare namespace MemoConditionFields {
    type q = string;
    type page = number;
    type perPage = number;
}
export interface MemoCondition extends DocBaseEntity {
    q: MemoConditionFields.q;
    page: MemoConditionFields.page;
    perPage: MemoConditionFields.perPage;
}
