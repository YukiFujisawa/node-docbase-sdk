"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocBase_1 = require("./DocBase");
const docBase = new DocBase_1.DocBase('apiToken');
const postReqRead = {};
postReqRead.apiToken = 'zgkXf_q5Vrjd8CTepKCV';
postReqRead.team = 'gladd';
postReqRead.id = 339417;
docBase.readPosts(postReqRead).then((reponse) => {
    // console.log(reponse);
});
const postReqCreate = {};
postReqCreate.apiToken = 'zgkXf_q5Vrjd8CTepKCV';
postReqCreate.team = 'gladd';
postReqCreate.title = 'タイトル';
postReqCreate.body = 'body';
postReqCreate.draft = false;
postReqCreate.notice = false;
postReqCreate.scope = 'private';
docBase.createPost(postReqCreate).then((reponse) => {
    console.log(reponse);
});
//# sourceMappingURL=index.js.map