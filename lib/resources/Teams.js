"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResourcesBase_1 = require("./ResourcesBase");
class Teams extends ResourcesBase_1.ResourcesBase {
    constructor(apiToken, team = '') {
        super(apiToken, team);
        this.baseUri = '/teams';
    }
}
exports.Teams = Teams;
//# sourceMappingURL=Teams.js.map