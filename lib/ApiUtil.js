"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUtil = void 0;
const HttpStatus_1 = require("./enums/HttpStatus");
const fs = require("fs");
const Snekfetch = require("snekfetch");
const DOCBASE_API_URL = 'https://api.docbase.io';
const EX_KEYS = ['domain'];
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
            try {
                const options = {};
                options.headers = {
                    'X-DocBaseToken': apiToken,
                    'content-type': 'application/json',
                };
                const snekfetch = new Snekfetch(reqMethod, reqUrl, options);
                if (content) {
                    options.data = content;
                }
                const response = yield snekfetch.send(content);
                apiRes.body = response.body;
                apiRes.statusCode = response.status;
                apiRes.options = options;
                apiRes.statusText = response.statusText;
                if (response.ok) {
                    apiRes.status = HttpStatus_1.HttpStatus.OK;
                }
                else {
                    apiRes.status = HttpStatus_1.HttpStatus.NG;
                }
            }
            catch (error) {
                throw error;
            }
            return apiRes;
        });
    }
    static checkUploadFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = fs.statSync(filePath);
                if (status.isFile()) {
                    return true;
                }
                if (status.isDirectory()) {
                    throw new Error(`${filePath} is Directory. You can only upload file.`);
                }
                throw new Error(`You can only upload file. ${filePath}`);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.ApiUtil = ApiUtil;
//# sourceMappingURL=ApiUtil.js.map