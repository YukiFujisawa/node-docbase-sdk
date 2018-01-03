import { DocBaseEntity } from './DocBaseEntity';

export namespace TagFields {
  export type name = string;
}

export interface Tag extends DocBaseEntity {
  name: TagFields.name;
}
