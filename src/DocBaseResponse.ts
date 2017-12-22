export namespace DocBaseResponseFields {
  export type status = string;
  export type statusCode = number;
  export type options = any;
  export type body = any;
}

export interface DocBaseResponse {
  status: DocBaseResponseFields.status;
  statusCode: DocBaseResponseFields.statusCode;
  options: DocBaseResponseFields.options;
  body: DocBaseResponseFields.body;
}
