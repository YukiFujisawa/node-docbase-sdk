"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
const ResourcesBase_1 = require("./ResourcesBase");
class Tags extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, domain) {
        super(apiToken, domain);
        this.baseUri = `/teams/${domain}/tags`;
    }
}
exports.Tags = Tags;
//# sourceMappingURL=Tags.js.map