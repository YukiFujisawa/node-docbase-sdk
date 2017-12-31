import { DocBaseEntity } from './DocBaseEntity';

export namespace CommentFields {
  export type body = string;
  export type notice = boolean;
  export type author_id = number;
  /**
   * ISO-8601
   * yyyy-MM-ddTHH:mm:ss
   */
  export type published_at = string;
  export type memo_id = number;
}

export interface Comment extends DocBaseEntity {
  body: CommentFields.body;
  notice: CommentFields.notice;
  author_id: CommentFields.author_id;
  published_at: CommentFields.published_at;
  memo_id: CommentFields.memo_id;
}
