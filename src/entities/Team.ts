import { DocBaseEntity } from './DocBaseEntity';

export namespace TeamFields {
  export type name = string;
}

export interface Team extends DocBaseEntity {
  name: TeamFields.name;
}
