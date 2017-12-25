# node-docbase-sdk

[![Dependency Status](https://beta.gemnasium.com/badges/github.com/YukiFujisawa/node-docbase-sdk.svg)](https://beta.gemnasium.com/projects/github.com/YukiFujisawa/node-docbase-sdk)

## サンプルコード

```typescript
import { DocBase } from 'node-docbase-sdk/lib/DocBase';
import { DocBaseReqReadPosts } from 'node-docbase-sdk/lib/DocBaseReqReadPosts';
import { DocBaseResponse } from 'node-docbase-sdk/lib/DocBaseResponse';
import { DocBaseReqCreatePost } from 'node-docbase-sdk/lib/DocBaseReqCreatePost';

// Get DocBaseAPI Token from cli.
// ex.
//   $ DOC_BASE_API_TOKEN=<DOC_BASE_API_TOKEN> node .
const DOC_BASE_API_TOKEN = process.env.DOC_BASE_API_TOKEN;
const TEAM_NAME = 'teamName';

const docBase: DocBase = new DocBase(DOC_BASE_API_TOKEN);

// メモの検索API
// @see https://help.docbase.io/posts/92984
const reqReadPosts: DocBaseReqReadPosts = <DocBaseReqReadPosts>{};
reqReadPosts.team = TEAM_NAME;
reqReadPosts.q = '*';
reqReadPosts.page = 1;
reqReadPosts.perPage = 20;
docBase.readPosts(reqReadPosts).then((reponse: DocBaseResponse) => {
  console.log(reponse);
});

// メモの詳細取得API
// @see https://help.docbase.io/posts/97204
const reqReadPost: DocBaseReqReadPosts = <DocBaseReqReadPosts>{};
reqReadPost.team = TEAM_NAME;
reqReadPost.id = 339417;
docBase.readPosts(reqReadPost).then((reponse: DocBaseResponse) => {
  console.log(reponse);
});

// メモの投稿API
// @see https://help.docbase.io/posts/92980
const postReqCreate: DocBaseReqCreatePost = <DocBaseReqCreatePost>{};
postReqCreate.team = TEAM_NAME;
postReqCreate.title = 'タイトル';
postReqCreate.body = 'body';
postReqCreate.draft = false;
postReqCreate.notice = false;
postReqCreate.scope = 'private';

docBase.createPost(postReqCreate).then((reponse: DocBaseResponse) => {
  console.log(reponse);
});
```
