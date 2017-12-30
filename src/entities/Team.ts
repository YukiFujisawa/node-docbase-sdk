import { DocBaseEntity } from './DocBaseEntity';

export namespace TeamFields {
  export type domain = string;
  export type name = string;
}

export interface Team extends DocBaseEntity {
  domain: TeamFields.domain;
  name: TeamFields.name;
}
