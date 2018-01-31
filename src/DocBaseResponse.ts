import { HttpStatus } from './enums/HttpStatus';

export namespace DocBaseResponseFields {
  export type status = HttpStatus;
  export type statusCode = number;
  export type statusText = string;
  export type options = any;
  export type body = any;
}

export interface DocBaseResponse {
  status: DocBaseResponseFields.status;
  statusCode: DocBaseResponseFields.statusCode;
  statusText: DocBaseResponseFields.statusText;
  options: DocBaseResponseFields.options;
  body: DocBaseResponseFields.body;
}
