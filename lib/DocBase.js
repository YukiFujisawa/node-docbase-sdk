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
const RequestMethods_1 = require("./enums/RequestMethods");
const request = require("request-promise");
const HttpStatus_1 = require("./enums/HttpStatus");
const HttpStatusCodes_1 = require("./enums/HttpStatusCodes");
class DocBase {
    constructor(apiToken) {
        this.dockBaseUrl = 'https://api.docbase.io';
        this.apiTimeout = 60000;
        this.apiToken = apiToken;
    }
    /**
     * Post read API / メモ検索API
     * @param {DocBaseReqReadPosts} req
     * @returns {Promise<DocBaseResponse>}
     */
    readPost(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiName = 'posts';
            const reqUrl = this.getApiUrl(req, apiName, [String(req.id)]);
            return yield this.sendRequest(req, RequestMethods_1.RequestMethods.GET, reqUrl);
        });
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
    readPosts(req) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const params = `?q=${req.q}&page=${req.page}&per_page=${req.perPage}`;
            const reqUrl = this.getApiUrl(req, apiName) + params;
            return yield this.sendRequest(req, RequestMethods_1.RequestMethods.GET, reqUrl);
        });
    }
    /**
     * Post create API / メモ作成API
     * @param {DocBaseReqCreatePost} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92980
     */
    createPost(req) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const reqUrl = this.getApiUrl(req, apiName);
            return yield this.sendRequest(req, RequestMethods_1.RequestMethods.POST, reqUrl, req);
        });
    }
    /**
     * Post update API / メモ更新API
     * @param {DocBaseReqUpdatePost} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92981
     */
    updatePost(req) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const reqUrl = this.getApiUrl(req, apiName, [String(req.id)]);
            return yield this.sendRequest(req, RequestMethods_1.RequestMethods.PATCH, reqUrl, req);
        });
    }
    /**
     * Delete post API / メモの削除API
     * @param {DocBaseReqDeletePost} req
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92982
     */
    deletePost(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiName = 'posts';
            const reqUrl = this.getApiUrl(req, apiName, [String(req.id)]);
            return yield this.sendRequest(req, RequestMethods_1.RequestMethods.DELETE, reqUrl, req);
        });
    }
    /**
     * Send request.
     * @param {DocBaseReqBase} req
     * @param {RequestMethods} reqMethod
     * @param {string} reqUrl
     * @param content
     * @returns {Promise<DocBaseResponse>}
     */
    sendRequest(req, reqMethod, reqUrl, content = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const apiRes = {};
            let options = {};
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
    /**
     * Get docBase API URL
     * @param {DocBaseReqBase} req
     * @param {string} apiName
     * @param {string[]} options
     * @returns {string}
     */
    getApiUrl(req, apiName, options = []) {
        let url = `${this.dockBaseUrl}/teams/${req.team}/${apiName}`;
        if (options.length === 0) {
            return url;
        }
        for (const option of options) {
            url += `/${option}`;
        }
        return url;
    }
}
exports.DocBase = DocBase;
//# sourceMappingURL=DocBase.js.map