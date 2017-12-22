import { DocBaseReqBase } from './DocBaseReqBase';

export namespace DocBaseReqCreatePostFields {
  export type title = string;
  export type body = string;
  export type draft = boolean;
  export type notice = boolean;
  export type tags = string[];
  export type scope = 'everyone' | 'group' | 'private';
  export type groups = number[];
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
