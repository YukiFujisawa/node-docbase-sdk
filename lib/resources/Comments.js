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
exports.Comments = void 0;
const ResourcesBase_1 = require("./ResourcesBase");
const HttpStatus_1 = require("../enums/HttpStatus");
const RequestMethods_1 = require("../enums/RequestMethods");
class Comments extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, domain, memoId) {
        super(apiToken, domain);
        this.pMemoId = 0;
        this.baseUri = `/teams/${super.domain}/posts/${memoId}/comments`;
    }
    /**
     * Create
     * @param {Comment} entity
     * @returns {Promise<DocBaseResponse>}
     */
    create(entity) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!entity.body) {
                throw new Error('Body is null.');
            }
            const response = yield _super.create.call(this, entity);
            if (response.status === HttpStatus_1.HttpStatus.OK && response.body) {
                response.body.memo_id = entity.memo_id;
                return response;
            }
            return response;
        });
    }
    delete(id) {
        const _super = Object.create(null, {
            domain: { get: () => super.domain }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `/teams/${_super.domain}/comments/${id}`;
            return yield this.sendRequest(RequestMethods_1.RequestMethods.DELETE, uri);
        });
    }
}
exports.Comments = Comments;
//# sourceMappingURL=Comments.js.map