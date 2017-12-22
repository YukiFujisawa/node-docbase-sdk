import { DocBaseResponse } from './DocBaseResponse';
import { DocBaseReqReadPosts } from './DocBaseReqReadPosts';
import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';
export declare class DocBase {
    apiToken: string;
    dockBaseUrl: string;
    apiTimeout: number;
    constructor(apiToken: string);
    /**
     * 指定したドメインのチームのメモを検索し、メモの一覧を取得します。
     * req.idを指定した場合は、そのメモ詳細を取得します。
     *
     * @param {DocBaseReqPosts} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92984
     */
    readPosts(req: DocBaseReqReadPosts): Promise<DocBaseResponse>;
    createPost(req: DocBaseReqCreatePost): Promise<DocBaseResponse>;
    private sendRequest(req, reqMethod, reqUrl, content?);
    private getApiUrl(req, apiName, options?);
}
