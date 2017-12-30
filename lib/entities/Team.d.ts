import { DocBaseEntity } from './DocBaseEntity';
export declare namespace TeamFields {
    type domain = string;
    type name = string;
}
export interface Team extends DocBaseEntity {
    domain: TeamFields.domain;
    name: TeamFields.name;
}
