import { DocBaseReqBase } from './DocBaseReqBase';
import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';

export namespace DocBaseReqUpdatePostFields {
  export type id = number;
}

export interface DocBaseReqUpdatePost extends DocBaseReqCreatePost {
  id: DocBaseReqUpdatePostFields.id;
}
