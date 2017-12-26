import { DocBaseResponse } from './DocBaseResponse';
import { RequestMethods } from './enums/RequestMethods';
import * as request from 'request-promise';
import { DocBaseReqBase } from './DocBaseReqBase';
import { HttpStatus } from './enums/HttpStatus';
import { HttpStatusCodes } from './enums/HttpStatusCodes';
import { DocBaseReqReadPosts } from './DocBaseReqReadPosts';
import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';
import { DocBaseReqUpdatePost } from './DocBaseReqUpdatePost';
import { DocBaseReqDeletePost } from './DocBaseReqDeletePost';
import { DocBaseReqReadPost } from './DocBaseReqReadPost';

export class DocBase {
  apiToken: string;
  dockBaseUrl: string = 'https://api.docbase.io';
  apiTimeout: number = 60000;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }


  /**
   * Post read API / メモ検索API
   * @param {DocBaseReqReadPosts} req
   * @returns {Promise<DocBaseResponse>}
   */
  async readPost(req: DocBaseReqReadPost): Promise<DocBaseResponse> {
    const apiName = 'posts';
    const reqUrl: string = this.getApiUrl(req, apiName, [String(req.id)]);
    return await this.sendRequest(req, RequestMethods.GET, reqUrl);
  }

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
  async readPosts(req: DocBaseReqReadPosts): Promise<DocBaseResponse> {
    const apiName = 'posts';

    if (!req.q) {
      req.q = '*';
    }
    if (!req.page) {
      req.page = 1;
    }
    if (!req.perPage) {
      req.perPage = 20;
    }
    const params: string = `?q=${req.q}&page=${req.page}&per_page=${req.perPage}`;
    const reqUrl: string = this.getApiUrl(req, apiName) + params;
    return await this.sendRequest(req, RequestMethods.GET, reqUrl);
  }

  /**
   * Post create API / メモ作成API
   * @param {DocBaseReqCreatePost} req
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92980
   */
  async createPost(req: DocBaseReqCreatePost): Promise<DocBaseResponse> {
    const apiName = 'posts';

    if (!req.title || !req.body) {
      throw new Error('Title or Body is null.');
    }
    if (!req.draft) {
      req.draft = false;
    }
    if (!req.notice) {
      req.notice = true;
    }
    if (!req.scope) {
      req.scope = 'everyone';
    }
    const reqUrl: string = this.getApiUrl(req, apiName);
    return await this.sendRequest(req, RequestMethods.POST, reqUrl, req);
  }


  /**
   * Post update API / メモ更新API
   * @param {DocBaseReqUpdatePost} req
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92981
   */
  async updatePost(req: DocBaseReqUpdatePost): Promise<DocBaseResponse> {
    const apiName = 'posts';

    if (!req.title || !req.body) {
      throw new Error('Title or Body is null.');
    }
    if (!req.draft) {
      req.draft = false;
    }
    if (!req.notice) {
      req.notice = true;
    }
    if (!req.scope) {
      req.scope = 'everyone';
    }
    const reqUrl: string = this.getApiUrl(req, apiName, [String(req.id)]);
    return await this.sendRequest(req, RequestMethods.PATCH, reqUrl, req);
  }

  /**
   * Delete post API / メモの削除API
   * @param {DocBaseReqDeletePost} req
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92982
   */
  async deletePost(req: DocBaseReqDeletePost): Promise<DocBaseResponse> {
    const apiName = 'posts';
    const reqUrl: string = this.getApiUrl(req, apiName, [String(req.id)]);
    return await this.sendRequest(req, RequestMethods.DELETE, reqUrl, req);
  }

  /**
   * Send request.
   * @param {DocBaseReqBase} req
   * @param {RequestMethods} reqMethod
   * @param {string} reqUrl
   * @param content
   * @returns {Promise<DocBaseResponse>}
   */
  private async sendRequest(req: DocBaseReqBase, reqMethod: RequestMethods, reqUrl: string, content: any = '') {
    const apiRes: DocBaseResponse = <DocBaseResponse>{};
    let options: any = {};
    try {
      options = {
        method: reqMethod,
        uri: reqUrl,
        headers: {
          'X-DocBaseToken': this.apiToken,
          'content-type': 'application/json',
        },
        rejectUnauthorized: false,
        timeout: this.apiTimeout,
        json: true,
      };
      if (content) {
        options['body'] = content;
      }
    } catch (error) {
      throw error;
    }
    try {
      const response = await request(options);
      apiRes.body = response;
      apiRes.options = options;
      apiRes.status = HttpStatus.OK;
      apiRes.statusCode = HttpStatusCodes.OK;
    } catch (error) {
      apiRes.body = error.message;
      apiRes.options = options;
      apiRes.status = HttpStatus.NG;
      apiRes.statusCode = error.statusCode;
    }
    return apiRes;
  }

  /**
   * Get docBase API URL
   * @param {DocBaseReqBase} req
   * @param {string} apiName
   * @param {string[]} options
   * @returns {string}
   */
  private getApiUrl(req: DocBaseReqBase, apiName: string, options: string[] = []) {
    let url: string = `${this.dockBaseUrl}/teams/${req.team}/${apiName}`;
    if (options.length === 0) {
      return url;
    }
    for (const option of options) {
      url += `/${option}`;
    }
    return url;
  }
}
