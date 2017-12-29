import { DocBaseResponse } from './DocBaseResponse';
import { IResources } from './resources/IResources';
import { Memos } from './resources/Memos';
import { DocBaseEntity } from './entities/DocBaseEntity';
import { Memo } from './entities/Memo';
import { MemoCondition } from './conditions/MemoCondition';

export class DocBase {

  constructor(private apiToken: string, private team: string) {
  }

  get memos(): Memos {
    return new Memos(this.team, this.apiToken);
  }

  /**
   * Post read API / メモ検索API
   * @param {MemoCondition} entity
   * @returns {Promise<DocBaseResponse>}
   */
  async readPost(entity: DocBaseEntity): Promise<DocBaseResponse> {
    return await this.memos.find(entity.id);
  }

  /**
   * Multiple posts read API / 複数メモ検索API
   *
   * If you specify req.id, you will get details.
   * req.idを指定した場合は、そのメモ詳細を取得します。
   *
   * @param {DocBaseReqPosts} condition
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92984
   */
  async readPosts(condition: MemoCondition): Promise<DocBaseResponse> {
    return await this.memos.where(condition);
  }

  /**
   * Post create API / メモ作成API
   * @param {DocBaseReqCreatePost} memo
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92980
   */
  async createPost(memo: Memo): Promise<DocBaseResponse> {
    return await this.memos.create(memo);
  }


  /**
   * Post update API / メモ更新API
   * @param {DocBaseReqUpdatePost} memo
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92981
   */
  async updatePost(memo: Memo): Promise<DocBaseResponse> {
    return await this.memos.update(memo);
  }

  /**
   * Delete post API / メモの削除API
   * @param {DocBaseReqDeletePost} entity
   * @returns {Promise<DocBaseResponse>}
   * @see https://help.docbase.io/posts/92982
   */
  async deletePost(entity: DocBaseEntity): Promise<DocBaseResponse> {
    return await this.memos.delete(entity.id);
  }
}
