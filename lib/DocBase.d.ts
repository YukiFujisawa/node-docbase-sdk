import { DocBaseResponse } from './DocBaseResponse';
import { Memos } from './resources/Memos';
import { DocBaseEntity } from './entities/DocBaseEntity';
import { Memo } from './entities/Memo';
import { MemoCondition } from './conditions/MemoCondition';
export declare class DocBase {
    private apiToken;
    private team;
    constructor(apiToken: string, team: string);
    readonly memos: Memos;
    /**
     * Post read API / メモ検索API
     * @param {MemoCondition} entity
     * @returns {Promise<DocBaseResponse>}
     */
    readPost(entity: DocBaseEntity): Promise<DocBaseResponse>;
    /**
     * Multiple posts read API / 複数メモ検索API
     *
     * If you specify req.id, you will get details.
     * req.idを指定した場合は、そのメモ詳細を取得します。
     *
     * @param {DocBaseReqPosts} condition
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92984
     */
    readPosts(condition: MemoCondition): Promise<DocBaseResponse>;
    /**
     * Post create API / メモ作成API
     * @param {DocBaseReqCreatePost} memo
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92980
     */
    createPost(memo: Memo): Promise<DocBaseResponse>;
    /**
     * Post update API / メモ更新API
     * @param {DocBaseReqUpdatePost} memo
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92981
     */
    updatePost(memo: Memo): Promise<DocBaseResponse>;
    /**
     * Delete post API / メモの削除API
     * @param {DocBaseReqDeletePost} entity
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92982
     */
    deletePost(entity: DocBaseEntity): Promise<DocBaseResponse>;
}
