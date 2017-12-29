import { DocBaseEntity } from './DocBaseEntity';
import { DisclosureScopes } from '../enums/DisclosureScopes';

export namespace MemoFields {
  export type title = string;
  export type body = string;
  export type draft = boolean;
  export type notice = boolean;
  export type tags = string[];
  export type scope = DisclosureScopes;
  export type groups = number[];
}

export interface Memo extends DocBaseEntity {
  title: MemoFields.title;
  body: MemoFields.body;
  draft: MemoFields.draft;
  notice: MemoFields.notice;
  tags: MemoFields.tags;
  scope: MemoFields.scope;
  groups: MemoFields.groups;
}
