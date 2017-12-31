"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Memos_1 = require("./resources/Memos");
const Teams_1 = require("./resources/Teams");
const Groups_1 = require("./resources/Groups");
const Comments_1 = require("./resources/Comments");
class DocBase {
    constructor(apiToken, team = '') {
        this.apiToken = apiToken;
        this.team = team;
    }
    get memos() {
        return new Memos_1.Memos(this.apiToken, this.team);
    }
    get teams() {
        return new Teams_1.Teams(this.apiToken);
    }
    get groups() {
        return new Groups_1.Groups(this.apiToken, this.team);
    }
    comments(memoId) {
        return new Comments_1.Comments(this.apiToken, this.team, memoId);
    }
}
exports.DocBase = DocBase;
//# sourceMappingURL=DocBase.js.map