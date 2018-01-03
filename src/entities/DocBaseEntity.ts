export namespace DocBaseEntityFields {
  export type id = number;
  export type domain = string;
}

export interface DocBaseEntity {
  id: DocBaseEntityFields.id;
  domain: DocBaseEntityFields.domain;
}
