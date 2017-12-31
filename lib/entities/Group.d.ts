import { DocBaseEntity } from './DocBaseEntity';
export declare namespace GroupFields {
    type name = string;
}
export interface Group extends DocBaseEntity {
    name: GroupFields.name;
}
