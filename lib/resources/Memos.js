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
const DisclosureScopes_1 = require("../enums/DisclosureScopes");
class Memos {
    constructor(team, apiToken) {
        this.team = team;
        this.apiToken = apiToken;
        this.baseUri = `/teams/${team}/posts`;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = this.baseUri + `/${id}`;
            return yield this.sendRequest(RequestMethods_1.RequestMethods.GET, uri);
        });
    }
    where(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            const cond = condition;
            if (!cond.q) {
                cond.q = '*';
            }
            if (!cond.page) {
                cond.page = 1;
            }
            if (!cond.perPage) {
                cond.perPage = 20;
            }
            return yield this.sendRequest(RequestMethods_1.RequestMethods.GET, this.baseUri, cond);
        });
    }
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!entity.title || !entity.body) {
                throw new Error('Title or Body is null.');
            }
            if (!entity.draft) {
                entity.draft = false;
            }
            if (!entity.notice) {
                entity.notice = true;
            }
            if (!entity.scope) {
                entity.scope = DisclosureScopes_1.DisclosureScopes.EVERYONE;
            }
            const uri = this.baseUri + `/${entity.id}`;
            return yield this.sendRequest(RequestMethods_1.RequestMethods.PATCH, uri);
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!entity.title || !entity.body) {
                throw new Error('Title or Body is null.');
            }
            if (!entity.draft) {
                entity.draft = false;
            }
            if (!entity.notice) {
                entity.notice = true;
            }
            if (!entity.scope) {
                entity.scope = DisclosureScopes_1.DisclosureScopes.EVERYONE;
            }
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
    sendRequest(reqMethod, apiUri, params = {}, entity = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqUrl = yield this.getApiUrl(apiUri, params);
            return yield ApiUtil_1.ApiUtil.sendRequest(this.apiToken, reqMethod, reqUrl, entity);
        });
    }
}
exports.Memos = Memos;
//# sourceMappingURL=Memos.js.map