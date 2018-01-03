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
  const reponse: DocBaseResponse = await docBase.memos.list(condition);
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
  const reponse: DocBaseResponse = await docBase.memos.delete(id);
```

### My team list / 所属チーム取得

https://help.docbase.io/posts/92977

```typescript
  const reponse: DocBaseResponse = await docBase.teams.list();
```

### Comment post / コメント投稿

https://help.docbase.io/posts/216289

```typescript
  const memoId = 1;
  const entity: Comment = <Comment>{};
  entity.memo_id = memoId;
  entity.body = 'COMMENT';
  entity.notice = false;
  const response: DocBaseResponse = await docBase.comments(memoId).create(entity);
```

### Comment delete / コメント削除

https://help.docbase.io/posts/216290

```typescript
  const id = 1;
  const memoId = 1;
  const response: DocBaseResponse = await docBase.comments(memoId).delete(id);
```

### Groups list  / グループ取得

https://help.docbase.io/posts/92978

```typescript
  const response: DocBaseResponse = await docBase.groups.list();
```

### Tag list  / タグ取得

https://help.docbase.io/posts/92979

```typescript
  const response: DocBaseResponse = await docBase.tags.list();
```

### File upload  / ファイルアップロード

https://help.docbase.io/posts/92979

```typescript
  const file: File = <File>{};
  file.file_path = '/Users/yfujisawa/Desktop/etc.txt'; 
  const splitPath: string[] = filePath.split('/');
  const fileName = splitPath[splitPath.length - 1];
  file.name = fileName;
  const response: DocBaseResponse = await docBase.files.create(file);
```

## Sample Code For TypeScript / サンプルコード

```typescript
import { DocBase } from 'node-docbase-sdk/lib/DocBase';
import { DocBaseResponse } from 'node-docbase-sdk/lib/DocBaseResponse';
import { HttpStatus } from 'node-docbase-sdk/lib/enums/HttpStatus';
import { MemoCondition } from 'node-docbase-sdk/lib/conditions/MemoCondition';
import { Memo } from 'node-docbase-sdk/lib/entities/Memo';
import { DisclosureScopes } from 'node-docbase-sdk/lib/enums/DisclosureScopes';
import { Comment } from 'node-docbase-sdk/lib/entities/Comment';
import { Team } from 'node-docbase-sdk/lib/entities/Team';
import { Group } from 'node-docbase-sdk/lib/entities/Group';
import { File } from 'node-docbase-sdk/entities/File';

// Get DocBaseAPI Token from cli.
// ex.
//   $ DOC_BASE_API_TOKEN=<DOC_BASE_API_TOKEN> node .
const DOC_BASE_API_TOKEN = process.env.DOC_BASE_API_TOKEN;
const TEAM_NAME = 'TEAM_NAME';
const KEYWORD = 'DOCBASE_API_TEST';

const docBase: DocBase = new DocBase(DOC_BASE_API_TOKEN, TEAM_NAME);

// コメント削除API
// @see https://help.docbase.io/posts/216289
async function deleteComment(entity: Comment) {
  console.log('== START deleteComment ==');
  const response: DocBaseResponse = await docBase.comments(entity.memo_id).delete(entity.id);
  console.log(`=== response: deleteComment===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// コメント投稿API
// @see https://help.docbase.io/posts/216289
async function postComment(memoId: number) {
  console.log('== START postComment ==');
  const entity: Comment = <Comment>{};
  entity.memo_id = memoId;
  entity.body = 'DOCBASE_API_TEST_COMMENT';
  entity.notice = false;
  const response: DocBaseResponse = await docBase.comments(memoId).create(entity);
  console.log(`=== response: postComment===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// グループ取得API
// @see https://help.docbase.io/posts/92978
async function getGroups() {
  console.log('== START getGroups ==');
  const response: DocBaseResponse = await docBase.groups.list();
  console.log(`=== response: getGroups===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// タグの取得API
// @see https://help.docbase.io/posts/92979
async function getTags() {
  console.log('== START getTags ==');
  const response: DocBaseResponse = await docBase.tags.list();
  console.log(`=== response: getTags===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// ファイルアップロードAPI
// @see https://help.docbase.io/posts/45703
async function uploadFile(filePath: string) {
  console.log('== START uploadFile ==');
  const file: File = <File>{};
  file.file_path = filePath;
  const splitPath: string[] = filePath.split('/');
  const fileName = splitPath[splitPath.length - 1];
  console.log('fileName::' + fileName);
  file.name = fileName;
  const response: DocBaseResponse = await docBase.files.create(file);
  console.log(`=== response: uploadFile===`);
  console.log(response.body);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// 所属チーム取得API
// @see https://help.docbase.io/posts/92977
async function getMyTeams(): Promise<Team[]> {
  console.log('== START getMyTeams ==');
  const response: DocBaseResponse = await docBase.teams.list();
  console.log(`=== response: getMyTeams===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// メモ投稿API
// @see https://help.docbase.io/posts/92980
async function createMemo(): Promise<Memo> {
  console.log('== START createMemo ==');
  const memo: Memo = <Memo>{};
  memo.title = KEYWORD;
  memo.body = KEYWORD;
  memo.draft = false;
  memo.notice = false;
  memo.scope = DisclosureScopes.PRIVATE;
  const response: DocBaseResponse = await docBase.memos.create(memo);
  console.log(`=== response: createMemo===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// メモ更新API
// @see https://help.docbase.io/posts/92981
async function updateMemo(memoId: number): Promise<Memo> {
  console.log('== START updateMemo ==');
  const memo: Memo = <Memo>{};
  memo.id = memoId;
  memo.title = KEYWORD + '_updated';
  memo.body = KEYWORD + '_updated';
  memo.draft = false;
  memo.notice = false;
  memo.scope = DisclosureScopes.PRIVATE;
  const response: DocBaseResponse = await docBase.memos.update(memo);
  console.log(`=== response: updateMemo===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// メモ詳細取得API
// @see https://help.docbase.io/posts/97204
async function findMemo(memoId: number): Promise<Memo> {
  console.log('== START findMemo ==');
  const response: DocBaseResponse = await docBase.memos.find(memoId);
  console.log(`=== response: findMemo ===`);
  console.log(response);
  console.log('======');
  if (response.status === HttpStatus.OK) {
    return response.body;
  }
  throw new Error(response.body);
}

// 複数メモ取得API
// @see https://help.docbase.io/posts/92984
async function searchMemos(keyword: string): Promise<Memo[]> {
  console.log('== START searchMemos ==');
  const condition: MemoCondition = <MemoCondition>{};
  condition.q = keyword;
  condition.page = 1;
  condition.per_page = 20;
  const response: DocBaseResponse = await docBase.memos.list(condition);
  console.log(`=== response: searchMemos===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return response.body.posts;
  }
  throw new Error(response.body);
}

// メモ削除API
// @see https://help.docbase.io/posts/92982
async function deleteMemo(memoId: number): Promise<boolean> {
  console.log('== START deleteMemo ==');
  const response: DocBaseResponse = await docBase.memos.delete(memoId);
  console.log(`=== response: deleteMemo===`);
  console.log(response);
  console.log(`======`);
  if (response.status === HttpStatus.OK) {
    return true;
  }
  throw new Error(response.body);
}

async function main() {
  try {
    const teams: Team[] = await getMyTeams();
    const groups: Group[] = await getGroups();
    const tags: Tag[] = await getTags();
    const createdMemo: Memo = await createMemo();
    const updatedMemo: Memo = await updateMemo(createdMemo.id);
    const memoDetail: Memo = await findMemo(updatedMemo.id);
    const memoList: Memo[] = await searchMemos(memoDetail.title);
    for (const memo of memoList) {
      if (memo.title === 'DOCBASE_API_TEST_updated') {
        console.log(JSON.stringify(memo));
        const comment: Comment = await postComment(memo.id);
        await deleteComment(comment);
        await deleteMemo(memo.id);
      } else {
        throw new Error(JSON.stringify(memo));
      }
    }
  } catch (error) {
    throw error;
  }
}

// == Main ==
main().catch((error) => {
  console.log(error);
});
// ====
```
