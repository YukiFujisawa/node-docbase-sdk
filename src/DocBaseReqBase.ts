export namespace DocBaseReqBaseFields {
  export type apiToken = string;
  export type team = string;
}

export interface DocBaseReqBase {
  apiToken: DocBaseReqBaseFields.apiToken;
  team: DocBaseReqBaseFields.team;
}
