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
exports.ResourcesBase = void 0;
const RequestMethods_1 = require("../enums/RequestMethods");
const ApiUtil_1 = require("../ApiUtil");
const HttpStatus_1 = require("../enums/HttpStatus");
class ResourcesBase {
    constructor(pApiToken, pDomain = '') {
        this.pApiToken = pApiToken;
        this.pDomain = pDomain;
    }
    get domain() {
        return this.pDomain;
    }
    get baseUri() {
        return this.pBaseUri;
    }
    set baseUri(pBaseUri) {
        this.pBaseUri = pBaseUri;
    }
    get apiToken() {
        return this.pApiToken;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = this.baseUri + `/${id}`;
            const response = yield this.sendRequest(RequestMethods_1.RequestMethods.GET, uri);
            if (response.status === HttpStatus_1.HttpStatus.OK && response.body) {
                response.body.domain = this.domain;
            }
            return response;
        });
    }
    list(condition = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sendRequest(RequestMethods_1.RequestMethods.GET, this.baseUri, condition);
            if (response.status === HttpStatus_1.HttpStatus.OK && response.body) {
                response.body.domain = this.domain;
            }
            return response;
        });
    }
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = entity;
            const uri = this.baseUri + `/${obj.id}`;
            const response = yield this.sendRequest(RequestMethods_1.RequestMethods.PATCH, uri, {}, obj);
            if (response.status === HttpStatus_1.HttpStatus.OK && response.body) {
                response.body.domain = this.domain;
            }
            return response;
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sendRequest(RequestMethods_1.RequestMethods.POST, this.baseUri, {}, entity);
            if (response.status === HttpStatus_1.HttpStatus.OK && response.body) {
                response.body.domain = this.domain;
            }
            return response;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = this.baseUri + `/${id}`;
            return yield this.sendRequest(RequestMethods_1.RequestMethods.DELETE, uri);
        });
    }
    getApiUrl(apiUri, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return ApiUtil_1.ApiUtil.getApiUrl(apiUri, params);
        });
    }
    sendRequest(reqMethod, apiUri, params = {}, entity = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqUrl = yield this.getApiUrl(apiUri, params);
            return yield ApiUtil_1.ApiUtil.sendRequest(this.apiToken, reqMethod, reqUrl, entity);
        });
    }
}
exports.ResourcesBase = ResourcesBase;
//# sourceMappingURL=ResourcesBase.js.map