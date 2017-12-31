import { DocBaseEntity } from './DocBaseEntity';
export declare namespace CommentFields {
    type body = string;
    type notice = boolean;
    type author_id = number;
    /**
     * ISO-8601
     * yyyy-MM-ddTHH:mm:ss
     */
    type published_at = string;
    type memo_id = number;
}
export interface Comment extends DocBaseEntity {
    body: CommentFields.body;
    notice: CommentFields.notice;
    author_id: CommentFields.author_id;
    published_at: CommentFields.published_at;
    memo_id: CommentFields.memo_id;
}
