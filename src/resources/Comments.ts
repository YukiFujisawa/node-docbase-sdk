import { DocBaseResponse } from '../DocBaseResponse';
import { ResourcesBase } from './ResourcesBase';
import { HttpStatus } from '../enums/HttpStatus';
import { Comment } from '../entities/Comment';
import { RequestMethods } from '../enums/RequestMethods';

export class Comments extends ResourcesBase<Comment> {

  private pMemoId: number = 0;

  constructor(apiToken: string, domain: string, memoId: number) {
    super(apiToken, domain);
    this.baseUri = `/teams/${super.domain}/posts/${memoId}/comments`;
  }

  /**
   * Create
   * @param {Comment} entity
   * @returns {Promise<DocBaseResponse>}
   */
  async create(entity: Comment): Promise<DocBaseResponse> {
    if (!entity.body) {
      throw new Error('Body is null.');
    }
    const response: DocBaseResponse = await super.create(entity);
    if (response.status === HttpStatus.OK && response.body) {
      response.body.memo_id = entity.memo_id;
      return response;
    }
    return response;
  }

  async delete(id: number): Promise<DocBaseResponse> {
    const uri: string = `/teams/${super.domain}/comments/${id}`;
    return await this.sendRequest(RequestMethods.DELETE, uri);
  }
}
