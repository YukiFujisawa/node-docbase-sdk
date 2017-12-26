import { DocBaseReqBase } from './DocBaseReqBase';

export namespace DocBaseReqReadPostFields {
  export type id = number;
}

export interface DocBaseReqReadPost extends DocBaseReqBase {
  id: DocBaseReqReadPostFields.id;
}
