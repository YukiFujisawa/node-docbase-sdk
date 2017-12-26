import { DocBaseReqBase } from './DocBaseReqBase';
export declare namespace DocBaseReqReadPostsFields {
    type q = string;
    type page = number;
    type perPage = number;
}
export interface DocBaseReqReadPosts extends DocBaseReqBase {
    q: DocBaseReqReadPostsFields.q;
    page: DocBaseReqReadPostsFields.page;
    perPage: DocBaseReqReadPostsFields.perPage;
}
