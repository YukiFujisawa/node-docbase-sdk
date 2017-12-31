"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResourcesBase_1 = require("./ResourcesBase");
class Groups extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, team) {
        super(apiToken, team);
        this.baseUri = `/teams/${team}/groups`;
    }
}
exports.Groups = Groups;
//# sourceMappingURL=Groups.js.map