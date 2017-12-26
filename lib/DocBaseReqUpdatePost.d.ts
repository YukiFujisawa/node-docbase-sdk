import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';
export declare namespace DocBaseReqUpdatePostFields {
    type id = number;
}
export interface DocBaseReqUpdatePost extends DocBaseReqCreatePost {
    id: DocBaseReqUpdatePostFields.id;
}
