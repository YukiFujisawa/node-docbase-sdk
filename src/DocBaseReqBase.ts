export namespace DocBaseReqBaseFields {
  export type apiToken = string;
  export type team = string;
}

export interface DocBaseReqBase {
  team: DocBaseReqBaseFields.team;
}
