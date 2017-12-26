import { DocBaseReqBase } from './DocBaseReqBase';

export namespace DocBaseReqDeletePostFields {
  export type id = number;
}

export interface DocBaseReqDeletePost extends DocBaseReqBase {
  id: DocBaseReqDeletePostFields.id;
}
