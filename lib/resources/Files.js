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
const ApiUtil_1 = require("../ApiUtil");
const fs = require("fs");
class Files extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, domain) {
        super(apiToken, domain);
        this.baseUri = `/teams/${domain}/attachments`;
    }
    create(entity) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const isFileOk = yield ApiUtil_1.ApiUtil.checkUploadFile(entity.file_path);
            if (isFileOk) {
                const buffer = fs.readFileSync(entity.file_path);
                entity.content = buffer.toString('base64');
            }
            return yield _super("create").call(this, entity);
        });
    }
}
exports.Files = Files;
//# sourceMappingURL=Files.js.map