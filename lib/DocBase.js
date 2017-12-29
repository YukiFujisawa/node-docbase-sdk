"use strict";
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
}
exports.DocBase = DocBase;
//# sourceMappingURL=DocBase.js.map