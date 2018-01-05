import { RequestMethods } from './enums/RequestMethods';
import { HttpStatus } from './enums/HttpStatus';
import * as request from 'request-promise';
import { DocBaseResponse } from './DocBaseResponse';
import { HttpStatusCodes } from './enums/HttpStatusCodes';
import * as fs from 'fs';


const DOCBASE_API_URL: string = 'https://api.docbase.io';
const TIMEOUT: number = 60000;
const EX_KEYS = ['domain'];

export class ApiUtil {
  /**
   * Get docBase API URL
   * @param {string} apiUri
   * @param params
   * @returns {Promise<string>}
   */
  static async getApiUrl(apiUri: string, params: any) {
    let paramStr: string = '';
    let url: string;
    for (const key in params) {
      if (EX_KEYS.indexOf(key) > -1) {
        continue;
      }
      if (paramStr) {
        paramStr += '&';
      }
      paramStr += `${key}=${encodeURIComponent(params[key])}`;
    }

    url = DOCBASE_API_URL + apiUri;
    if (paramStr) {
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
  static async sendRequest(apiToken: string,
                           reqMethod: RequestMethods,
                           reqUrl: string,
                           content: any = ''): Promise<DocBaseResponse> {
    const apiRes: DocBaseResponse = <DocBaseResponse>{};
    let options: any = {};
    try {
      options = {
        method: reqMethod,
        uri: reqUrl,
        headers: {
          'X-DocBaseToken': apiToken,
          'content-type': 'application/json',
        },
        rejectUnauthorized: false,
        timeout: TIMEOUT,
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
