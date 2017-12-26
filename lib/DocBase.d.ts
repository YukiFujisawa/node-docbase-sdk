import { DocBaseResponse } from './DocBaseResponse';
import { DocBaseReqReadPosts } from './DocBaseReqReadPosts';
import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';
import { DocBaseReqUpdatePost } from './DocBaseReqUpdatePost';
import { DocBaseReqDeletePost } from './DocBaseReqDeletePost';
import { DocBaseReqReadPost } from './DocBaseReqReadPost';
export declare class DocBase {
    apiToken: string;
    dockBaseUrl: string;
    apiTimeout: number;
    constructor(apiToken: string);
    /**
     * Post read API / メモ検索API
     * @param {DocBaseReqReadPosts} req
     * @returns {Promise<DocBaseResponse>}
     */
    readPost(req: DocBaseReqReadPost): Promise<DocBaseResponse>;
    /**
     * Multiple posts read API / 複数メモ検索API
     *
     * If you specify req.id, you will get details.
     * req.idを指定した場合は、そのメモ詳細を取得します。
     *
     * @param {DocBaseReqPosts} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92984
     */
    readPosts(req: DocBaseReqReadPosts): Promise<DocBaseResponse>;
    /**
     * Post create API / メモ作成API
     * @param {DocBaseReqCreatePost} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92980
     */
    createPost(req: DocBaseReqCreatePost): Promise<DocBaseResponse>;
    /**
     * Post update API / メモ更新API
     * @param {DocBaseReqUpdatePost} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92981
     */
    updatePost(req: DocBaseReqUpdatePost): Promise<DocBaseResponse>;
    /**
     * Delete post API / メモの削除API
     * @param {DocBaseReqDeletePost} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92982
     */
    deletePost(req: DocBaseReqDeletePost): Promise<DocBaseResponse>;
    /**
     * Send request.
     * @param {DocBaseReqBase} req
     * @param {RequestMethods} reqMethod
     * @param {string} reqUrl
     * @param content
     * @returns {Promise<DocBaseResponse>}
     */
    private sendRequest(req, reqMethod, reqUrl, content?);
    /**
     * Get docBase API URL
     * @param {DocBaseReqBase} req
     * @param {string} apiName
     * @param {string[]} options
     * @returns {string}
     */
    private getApiUrl(req, apiName, options?);
}
