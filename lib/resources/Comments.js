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
const ResourcesBase_1 = require("./ResourcesBase");
const HttpStatus_1 = require("../enums/HttpStatus");
const RequestMethods_1 = require("../enums/RequestMethods");
class Comments extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, team, memoId) {
        super(apiToken, team);
        this.pMemoId = 0;
        this.baseUri = `/teams/${super.team}/posts/${memoId}/comments`;
    }
    /**
     * Create
     * @param {Comment} entity
     * @returns {Promise<DocBaseResponse>}
     */
    create(entity) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            if (!entity.body) {
                throw new Error('Body is null.');
            }
            const response = yield _super("create").call(this, entity);
            if (response.status === HttpStatus_1.HttpStatus.OK && response.body) {
                response.body.memo_id = entity.memo_id;
                return response;
            }
            return response;
        });
    }
    delete(id) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `/teams/${_super("team")}/comments/${id}`;
            return yield this.sendRequest(RequestMethods_1.RequestMethods.DELETE, uri);
        });
    }
}
exports.Comments = Comments;
//# sourceMappingURL=Comments.js.map