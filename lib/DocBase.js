"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Memos_1 = require("./resources/Memos");
const Teams_1 = require("./resources/Teams");
class DocBase {
    constructor(apiToken, team) {
        this.apiToken = apiToken;
        this.team = team;
    }
    get memos() {
        return new Memos_1.Memos(this.apiToken, this.team);
    }
    get teams() {
        return new Teams_1.Teams(this.apiToken);
    }
}
exports.DocBase = DocBase;
//# sourceMappingURL=DocBase.js.map