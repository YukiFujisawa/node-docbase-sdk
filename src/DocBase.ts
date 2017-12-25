import { DocBaseResponse } from './DocBaseResponse';
import { RequestMethods } from './enums/RequestMethods';
import * as request from 'request-promise';
import { DocBaseReqBase } from './DocBaseReqBase';
import { HttpStatus } from './enums/HttpStatus';
import { HttpStatusCodes } from './enums/HttpStatusCodes';
import { DocBaseReqReadPosts } from './DocBaseReqReadPosts';
import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';

export class DocBase {
  apiToken: string;
  dockBaseUrl: string = 'https://api.docbase.io';
  apiTimeout: number = 60000;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  /**
   * 指定したドメインのチームのメモを検索し、メモの一覧を取得します。
   * req.idを指定した場合は、そのメモ詳細を取得します。
   *
   * @param {DocBaseReqPosts} req
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92984
   */
  async readPosts(req: DocBaseReqReadPosts): Promise<DocBaseResponse> {
    const apiName = 'posts';

    // メモの詳細取得
    if (req.id) {
      const reqUrl: string = this.getApiUrl(req, apiName, [String(req.id)]);
      return await this.sendRequest(req, RequestMethods.GET, reqUrl);
    }

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

  private async sendRequest(req: DocBaseReqBase, reqMethod: RequestMethods, reqUrl: string, content: any = {}) {
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
        body: content,
        rejectUnauthorized: false,
        timeout: this.apiTimeout,
        json: true,
      };
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
