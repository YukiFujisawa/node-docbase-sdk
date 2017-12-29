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
const Memos_1 = require("./resources/Memos");
class DocBase {
    constructor(apiToken, team) {
        this.apiToken = apiToken;
        this.team = team;
    }
    get memos() {
        return new Memos_1.Memos(this.team, this.apiToken);
    }
    /**
     * Post read API / メモ検索API
     * @param {MemoCondition} entity
     * @returns {Promise<DocBaseResponse>}
     */
    readPost(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.memos.find(entity.id);
        });
    }
    /**
     * Multiple posts read API / 複数メモ検索API
     *
     * If you specify req.id, you will get details.
     * req.idを指定した場合は、そのメモ詳細を取得します。
     *
     * @param {DocBaseReqPosts} condition
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92984
     */
    readPosts(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.memos.where(condition);
        });
    }
    /**
     * Post create API / メモ作成API
     * @param {DocBaseReqCreatePost} memo
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92980
     */
    createPost(memo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.memos.create(memo);
        });
    }
    /**
     * Post update API / メモ更新API
     * @param {DocBaseReqUpdatePost} memo
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92981
     */
    updatePost(memo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.memos.update(memo);
        });
    }
    /**
     * Delete post API / メモの削除API
     * @param {DocBaseReqDeletePost} entity
     * @returns {Promise<DocBaseResponse>}
     * @see https://help.docbase.io/posts/92982
     */
    deletePost(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.memos.delete(entity.id);
        });
    }
}
exports.DocBase = DocBase;
//# sourceMappingURL=DocBase.js.map