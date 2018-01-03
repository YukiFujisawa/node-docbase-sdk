"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResourcesBase_1 = require("./ResourcesBase");
class Groups extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, domain) {
        super(apiToken, domain);
        this.baseUri = `/teams/${domain}/groups`;
    }
}
exports.Groups = Groups;
//# sourceMappingURL=Groups.js.map