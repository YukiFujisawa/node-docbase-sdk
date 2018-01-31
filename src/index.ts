import { DocBase } from './DocBase';
import { DocBaseResponse } from './DocBaseResponse';
import { HttpStatus } from './enums/HttpStatus';
import { Comment } from './entities/Comment';
import { File } from './entities/File';
import { DisclosureScopes } from './enums/DisclosureScopes';
import { Memo } from './entities/Memo';
import { MemoCondition } from './conditions/MemoCondition';
import { Team } from './entities/Team';
import { Group } from './entities/Group';
import { Tag } from './entities/Tag';

// Get DocBaseAPI Token from cli.
// ex.
//   $ DOC_BASE_API_TOKEN=<DOC_BASE_API_TOKEN> node .
const DOC_BASE_API_TOKEN = process.env.DOC_BASE_API_TOKEN;
const TEAM_NAME = 'yfujisawa';
const KEYWORD = 'DOCBASE_API_TEST';

const docBase: DocBase = new DocBase(DOC_BASE_API_TOKEN, TEAM_NAME);

// コメント削除API
// @see https://help.docbase.io/posts/216290
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
// @see https://help.docbase.io/posts/225804
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
  process.exitCode = 1;
});
// ====
