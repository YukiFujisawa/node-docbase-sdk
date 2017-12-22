import { DocBaseReqBase } from './DocBaseReqBase';
export declare namespace DocBaseReqReadPostsFields {
    type id = number;
    type q = string;
    type page = number;
    type perPage = number;
}
export interface DocBaseReqReadPosts extends DocBaseReqBase {
    id: DocBaseReqReadPostsFields.id;
    q: DocBaseReqReadPostsFields.q;
    page: DocBaseReqReadPostsFields.page;
    perPage: DocBaseReqReadPostsFields.perPage;
}
