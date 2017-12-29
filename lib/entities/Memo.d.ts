import { DocBaseEntity } from './DocBaseEntity';
import { DisclosureScopes } from '../enums/DisclosureScopes';
export declare namespace MemoFields {
    type title = string;
    type body = string;
    type draft = boolean;
    type notice = boolean;
    type tags = string[];
    type scope = DisclosureScopes;
    type groups = number[];
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
