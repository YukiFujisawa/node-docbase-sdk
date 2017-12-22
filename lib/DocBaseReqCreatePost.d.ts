import { DocBaseReqBase } from './DocBaseReqBase';
export declare namespace DocBaseReqCreatePostFields {
    type title = string;
    type body = string;
    type draft = boolean;
    type notice = boolean;
    type tags = string[];
    type scope = 'everyone' | 'group' | 'private';
    type groups = number[];
}
export interface DocBaseReqCreatePost extends DocBaseReqBase {
    title: DocBaseReqCreatePostFields.title;
    body: DocBaseReqCreatePostFields.body;
    draft: DocBaseReqCreatePostFields.draft;
    notice: DocBaseReqCreatePostFields.notice;
    tags: DocBaseReqCreatePostFields.tags;
    scope: DocBaseReqCreatePostFields.scope;
    groups: DocBaseReqCreatePostFields.groups;
}
