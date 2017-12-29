# node-docbase-sdk 

[![Dependency Status](https://beta.gemnasium.com/badges/github.com/YukiFujisawa/node-docbase-sdk.svg)](https://beta.gemnasium.com/projects/github.com/YukiFujisawa/node-docbase-sdk)

## Overview

node-docbase-sdk is a library for DocBase (https://docbase.io/) API of information sharing service.
It is compatible with TypeScript and is a library for developers who want to implement with TypeScript.

node-docbase-sdkは、情報共有サービスのDocBase (https://docbase.io/) API用のライブラリです。
TypeScriptに対応しており、TypeScriptで実装したい開発者向けのライブラリとなっています。

## Installation

```bash
$ npm install node-docbase-sdk --save
```

## Sample Project For TypeScript

https://github.com/YukiFujisawa/node-docbase-sdk-sample

## Usage with TypeScript

### API Client

Your app will interact with the Web API through the `DocBase` object, 
which a top level export from this package. 

```typescript
// An access token
const DOC_BASE_API_TOKEN = process.env.DOC_BASE_API_TOKEN;
const TEAM_NAME = 'TEAM_NAME';

const docBase: DocBase = new DocBase(DOC_BASE_API_TOKEN, TEAM_NAME);
```

### Memo conditional search / メモ条件検索

https://help.docbase.io/posts/92984

```typescript
  const condition: MemoCondition = <MemoCondition>{};
  condition.q = 'query';
  condition.page = 1;
  condition.perPage = 20;
  const reponse: DocBaseResponse = await docBase.memos.where(condition);
```

### Memo detail / メモ詳細

https://help.docbase.io/posts/97204

```typescript
  const id = 1;
  const reponse: DocBaseResponse = await docBase.memos.find(id);
```

### Memo create / メモ投稿

https://help.docbase.io/posts/92980

```typescript
  const memo: Memo = <Memo>{};
  memo.title = 'title';
  memo.body = 'title';
  memo.draft = false;
  memo.notice = false;
  memo.scope = DisclosureScopes.PRIVATE;
  const reponse: DocBaseResponse = await docBase.memos.create(memo);
```

### Memo update / メモ更新

https://help.docbase.io/posts/92981

```typescript
  const memo: Memo = <Memo>{};
  memo.id = 1;
  memo.title = 'title';
  memo.body = 'body';
  memo.draft = false;
  memo.notice = false;
  memo.scope = DisclosureScopes.PRIVATE;
  const reponse: DocBaseResponse = await docBase.memos.update(memo);
```

### Memo delete / メモ削除

https://help.docbase.io/posts/92982

```typescript
  const id = 1;
  const reponse: DocBaseResponse = await docBase.deletePost(id);
```

## Sample Code For TypeScript / サンプルコード

```typescript
import { DocBase } from 'node-docbase-sdk/lib/DocBase';
import { Memo } from 'node-docbase-sdk/lib/entities/Memo';
import { DisclosureScopes } from 'node-docbase-sdk/lib/enums/DisclosureScopes';
import { DocBaseResponse } from 'node-docbase-sdk/lib/DocBaseResponse';
import { HttpStatus } from 'node-docbase-sdk/lib/enums/HttpStatus';
import { MemoCondition } from 'node-docbase-sdk/lib/conditions/MemoCondition';

// Get DocBaseAPI Token from cli.
// ex.
//   $ DOC_BASE_API_TOKEN=<DOC_BASE_API_TOKEN> node .
const DOC_BASE_API_TOKEN = process.env.DOC_BASE_API_TOKEN;
const TEAM_NAME = 'TEAM_NAME';
const KEYWORD = 'DOCBASE_API_TEST';

const docBase: DocBase = new DocBase(DOC_BASE_API_TOKEN, TEAM_NAME);

// メモ投稿API
// @see https://help.docbase.io/posts/92980
async function createMemo() {
  console.log('== START createMemo ==');
  const memo: Memo = <Memo>{};
  memo.title = KEYWORD;
  memo.body = KEYWORD;
  memo.draft = false;
  memo.notice = false;
  memo.scope = DisclosureScopes.PRIVATE;
  const reponse: DocBaseResponse = await docBase.memos.create(memo);
  console.log(`=== Reponse: createMemo===`);
  console.log(reponse);
  console.log(`======`);
  if (reponse.status === HttpStatus.OK) {
    return reponse.body;
  }
  throw Error(reponse.body);
}

// メモ更新API
// @see https://help.docbase.io/posts/92981
async function updateMemos(memoId: number) {
  console.log('== START updateMemos ==');
  const memo: Memo = <Memo>{};
  memo.id = memoId;
  memo.title = KEYWORD + '_updated';
  memo.body = KEYWORD + '_updated';
  memo.draft = false;
  memo.notice = false;
  memo.scope = DisclosureScopes.PRIVATE;
  const reponse: DocBaseResponse = await docBase.memos.update(memo);
  console.log(`=== Reponse: updateMemos===`);
  console.log(reponse);
  console.log(`======`);
  if (reponse.status === HttpStatus.OK) {
    return reponse.body;
  }
  throw Error(reponse.body);
}

// メモ詳細取得API
// @see https://help.docbase.io/posts/97204
async function findMemo(memoId: number) {
  console.log('== START findMemo ==');
  const reponse: DocBaseResponse = await docBase.memos.find(memoId);
  console.log(`=== Reponse: findMemo ===`);
  console.log(reponse);
  console.log('======');
  if (reponse.status === HttpStatus.OK) {
    return reponse.body;
  }
  throw Error(reponse.body);
}

// 複数メモ取得API
// @see https://help.docbase.io/posts/92984
async function searchMemos(keyword: string) {
  console.log('== START searchMemos ==');
  const condition: MemoCondition = <MemoCondition>{};
  condition.q = keyword;
  condition.page = 1;
  condition.perPage = 20;
  const reponse: DocBaseResponse = await docBase.memos.where(condition);
  console.log(`=== Reponse: searchMemos===`);
  console.log(reponse);
  console.log(`======`);
  if (reponse.status === HttpStatus.OK) {
    return reponse.body;
  }
  throw Error(reponse.body);
}

// メモ削除API
// @see https://help.docbase.io/posts/92982
async function deleteMemo(memoId: number) {
  console.log('== START deleteMemo ==');
  const reponse: DocBaseResponse = await docBase.memos.delete(memoId);
  console.log(`=== Reponse: deleteMemo===`);
  console.log(reponse);
  console.log(`======`);
  if (reponse.status === HttpStatus.OK) {
    return reponse.body;
  }
  throw Error(reponse.body);
}

async function main() {
  let resBody = await createMemo();
  resBody = await updateMemos(Number(resBody.id));
  resBody = await findMemo(Number(resBody.id));
  resBody = await searchMemos(String(resBody.title));
  for (const post of resBody.posts) {
    console.log(JSON.stringify(post));
    // await deleteMemo(post.id);
  }
}

// == Main ==
main();
// ====

```
