"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Memos_1 = require("./resources/Memos");
const Teams_1 = require("./resources/Teams");
const Groups_1 = require("./resources/Groups");
const Comments_1 = require("./resources/Comments");
const Tags_1 = require("./resources/Tags");
const Files_1 = require("./resources/Files");
class DocBase {
    constructor(apiToken, domain = '') {
        this.apiToken = apiToken;
        this.domain = domain;
    }
    get memos() {
        return new Memos_1.Memos(this.apiToken, this.domain);
    }
    get teams() {
        return new Teams_1.Teams(this.apiToken);
    }
    get groups() {
        return new Groups_1.Groups(this.apiToken, this.domain);
    }
    get tags() {
        return new Tags_1.Tags(this.apiToken, this.domain);
    }
    get files() {
        return new Files_1.Files(this.apiToken, this.domain);
    }
    comments(memoId) {
        return new Comments_1.Comments(this.apiToken, this.domain, memoId);
    }
}
exports.DocBase = DocBase;
//# sourceMappingURL=DocBase.js.map