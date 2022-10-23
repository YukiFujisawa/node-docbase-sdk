"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
const ResourcesBase_1 = require("./ResourcesBase");
class Teams extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, domain = '') {
        super(apiToken, domain);
        this.baseUri = '/teams';
    }
}
exports.Teams = Teams;
//# sourceMappingURL=Teams.js.map