import { DocBaseReqBase } from './DocBaseReqBase';

export namespace DocBaseReqReadPostsFields {
  export type q = string;
  export type page = number;
  export type perPage = number;
}

export interface DocBaseReqReadPosts extends DocBaseReqBase {
  q: DocBaseReqReadPostsFields.q;
  page: DocBaseReqReadPostsFields.page;
  perPage: DocBaseReqReadPostsFields.perPage;
}
