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
exports.Memos = void 0;
const DisclosureScopes_1 = require("../enums/DisclosureScopes");
const ResourcesBase_1 = require("./ResourcesBase");
class Memos extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, domain) {
        super(apiToken, domain);
        this.baseUri = `/teams/${domain}/posts`;
    }
    /**
     * Update
     * @param {Memo} entity
     * @returns {Promise<DocBaseResponse>}
     * @override
     */
    update(entity) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
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
            return yield _super.update.call(this, entity);
        });
    }
    /**
     * Create
     * @param {Memo} entity
     * @returns {Promise<DocBaseResponse>}
     * @override
     */
    create(entity) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
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
            return yield _super.create.call(this, entity);
        });
    }
}
exports.Memos = Memos;
//# sourceMappingURL=Memos.js.map