import { DocBaseEntity } from './DocBaseEntity';
export declare namespace TeamFields {
    type name = string;
}
export interface Team extends DocBaseEntity {
    name: TeamFields.name;
}
