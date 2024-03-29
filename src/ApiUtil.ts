import { DocBaseResponse } from './DocBaseResponse';
import { HttpStatus } from './enums/HttpStatus';
import { RequestMethods } from './enums/RequestMethods';

import * as fs from 'fs';
import * as Snekfetch from 'snekfetch';

const DOCBASE_API_URL: string = 'https://api.docbase.io';
const EX_KEYS = ['domain'];

export class ApiUtil {
  /**
   * Get docBase API URL
   * @param {string} apiUri
   * @param params
   * @returns {Promise<string>}
   */
  public static async getApiUrl(apiUri: string, params: any) {
    let paramStr: string = '';
    let url: string;
    for (const key in params) {
      if (EX_KEYS.includes(key)) {
        continue;
      }
      if (paramStr.length > 0) {
        paramStr += '&';
      }
      paramStr += `${key}=${encodeURIComponent(params[key])}`;
    }

    url = DOCBASE_API_URL + apiUri;
    if (paramStr.length > 0) {
      url += '?' + paramStr;
    }
    return url;
  }

  /**
   * Send request.
   * @param {DocBaseEntity} req
   * @param {RequestMethods} reqMethod
   * @param {string} reqUrl
   * @param content
   * @returns {Promise<DocBaseResponse>}
   */
  public static async sendRequest(
    apiToken: string,
    reqMethod: RequestMethods,
    reqUrl: string,
    content: any = ''
  ): Promise<DocBaseResponse> {
    const apiRes: DocBaseResponse = <DocBaseResponse>{};
    try {
      const options: Snekfetch.SnekfetchOptions = <Snekfetch.SnekfetchOptions>{};
      options.headers = {
        'X-DocBaseToken': apiToken,
        'content-type': 'application/json',
      };

      const snekfetch: Snekfetch = new Snekfetch(reqMethod, reqUrl, options);

      if (content) {
        options.data = content;
      }
      const response: Snekfetch.SnekfetchResponse = await snekfetch.send(content);

      apiRes.body = response.body;
      apiRes.statusCode = response.status;
      apiRes.options = options;
      apiRes.statusText = response.statusText;

      if (response.ok) {
        apiRes.status = HttpStatus.OK;
      } else {
        apiRes.status = HttpStatus.NG;
      }
    } catch (error) {
      throw error;
    }
    return apiRes;
  }

  static async checkUploadFile(filePath: string) {
    try {
      const status: fs.Stats = fs.statSync(filePath);
      if (status.isFile()) {
        return true;
      }
      if (status.isDirectory()) {
        throw new Error(`${filePath} is Directory. You can only upload file.`);
      }
      throw new Error(`You can only upload file. ${filePath}`);
    } catch (err) {
      throw err;
    }
  }
}
