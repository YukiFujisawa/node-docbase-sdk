import { RequestMethods } from './enums/RequestMethods';
import { DocBaseResponse } from './DocBaseResponse';
export declare class ApiUtil {
    /**
     * Get docBase API URL
     * @param {string} apiUri
     * @param params
     * @returns {Promise<string>}
     */
    static getApiUrl(apiUri: string, params: any): Promise<string>;
    /**
     * Send request.
     * @param {DocBaseEntity} req
     * @param {RequestMethods} reqMethod
     * @param {string} reqUrl
     * @param content
     * @returns {Promise<DocBaseResponse>}
     */
    static sendRequest(apiToken: string, reqMethod: RequestMethods, reqUrl: string, content?: any): Promise<DocBaseResponse>;
}
