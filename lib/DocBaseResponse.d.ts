import { HttpStatus } from './enums/HttpStatus';
export declare namespace DocBaseResponseFields {
    type status = HttpStatus;
    type statusCode = number;
    type options = any;
    type body = any;
}
export interface DocBaseResponse {
    status: DocBaseResponseFields.status;
    statusCode: DocBaseResponseFields.statusCode;
    options: DocBaseResponseFields.options;
    body: DocBaseResponseFields.body;
}
