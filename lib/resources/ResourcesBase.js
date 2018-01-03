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
const RequestMethods_1 = require("../enums/RequestMethods");
const ApiUtil_1 = require("../ApiUtil");
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
            return yield this.sendRequest(RequestMethods_1.RequestMethods.GET, uri);
        });
    }
    list(condition = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendRequest(RequestMethods_1.RequestMethods.GET, this.baseUri, condition);
        });
    }
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = entity;
            const uri = this.baseUri + `/${obj.id}`;
            return yield this.sendRequest(RequestMethods_1.RequestMethods.PATCH, uri, {}, obj);
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendRequest(RequestMethods_1.RequestMethods.POST, this.baseUri, {}, entity);
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