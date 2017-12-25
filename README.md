# node-docbase-sdk

[![Dependency Status](https://beta.gemnasium.com/badges/github.com/YukiFujisawa/node-docbase-sdk.svg)](https://beta.gemnasium.com/projects/github.com/YukiFujisawa/node-docbase-sdk)

## サンプルコード

```typescript
import { DocBase } from './DocBase';
import { DocBaseResponse } from './DocBaseResponse';
import { DocBaseReqReadPosts } from './DocBaseReqReadPosts';
import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';

const API_TOKEN = 'API_TOKEN';
const docBase: DocBase = new DocBase(API_TOKEN);
const postReqRead: DocBaseReqReadPosts = <DocBaseReqReadPosts>{};
postReqRead.team = 'teamName';
postReqRead.id = 99999;

docBase.readPosts(postReqRead).then((reponse: DocBaseResponse) => {
  console.log(reponse);
});

const postReqCreate: DocBaseReqCreatePost = <DocBaseReqCreatePost>{};
postReqCreate.team = 'teamName';
postReqCreate.title = 'タイトル';
postReqCreate.body = 'body';
postReqCreate.draft = false;
postReqCreate.notice = false;
postReqCreate.scope = 'private';

docBase.createPost(postReqCreate).then((reponse: DocBaseResponse) => {
  console.log(reponse);
});
```