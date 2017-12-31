import { DocBaseEntity } from './DocBaseEntity';

export namespace GroupFields {
  export type name = string;
}

export interface Group extends DocBaseEntity {
  name: GroupFields.name;
}
