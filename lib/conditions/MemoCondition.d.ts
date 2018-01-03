import { DocBaseEntity } from '../entities/DocBaseEntity';
export declare namespace MemoConditionFields {
    type q = string;
    type page = number;
    type per_page = number;
}
export interface MemoCondition extends DocBaseEntity {
    q: MemoConditionFields.q;
    page: MemoConditionFields.page;
    per_page: MemoConditionFields.per_page;
}
