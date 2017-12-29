"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = require("./enums/HttpStatus");
const request = require("request-promise");
const HttpStatusCodes_1 = require("./enums/HttpStatusCodes");
const DOCBASE_API_URL = 'https://api.docbase.io';
const TIMEOUT = 60000;
const EX_KEYS = ['team'];
class ApiUtil {
    /**
     * Get docBase API URL
     * @param {string} apiUri
     * @param params
     * @returns {Promise<string>}
     */
    static getApiUrl(apiUri, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let paramStr = '';
            let url;
            for (const key in params) {
                if (EX_KEYS.indexOf(key) > -1) {
                    continue;
                }
                if (paramStr) {
                    paramStr += '&';
                }
                paramStr += `${key}=${params[key]}`;
            }
            console.log('apiUri::' + apiUri);
            url = DOCBASE_API_URL + apiUri;
            if (paramStr) {
                url += '?' + paramStr;
            }
            return url;
        });
    }
    /**
     * Send request.
     * @param {DocBaseEntity} req
     * @param {RequestMethods} reqMethod
     * @param {string} reqUrl
     * @param content
     * @returns {Promise<DocBaseResponse>}
     */
    static sendRequest(apiToken, reqMethod, reqUrl, content = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const apiRes = {};
            let options = {};
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
            }
            catch (error) {
                throw error;
            }
            try {
                const response = yield request(options);
                apiRes.body = response;
                apiRes.options = options;
                apiRes.status = HttpStatus_1.HttpStatus.OK;
                apiRes.statusCode = HttpStatusCodes_1.HttpStatusCodes.OK;
            }
            catch (error) {
                apiRes.body = error.message;
                apiRes.options = options;
                apiRes.status = HttpStatus_1.HttpStatus.NG;
                apiRes.statusCode = error.statusCode;
            }
            return apiRes;
        });
    }
}
exports.ApiUtil = ApiUtil;
//# sourceMappingURL=ApiUtil.js.map