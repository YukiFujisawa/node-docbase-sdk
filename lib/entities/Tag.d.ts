import { DocBaseEntity } from './DocBaseEntity';
export declare namespace TagFields {
    type name = string;
}
export interface Tag extends DocBaseEntity {
    name: TagFields.name;
}
