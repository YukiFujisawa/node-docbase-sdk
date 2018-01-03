import { DocBaseResponse } from '../DocBaseResponse';
import { Memo } from '../entities/Memo';
import { DisclosureScopes } from '../enums/DisclosureScopes';
import { ResourcesBase } from './ResourcesBase';

export class Memos extends ResourcesBase<Memo> {

  constructor(apiToken: string, domain: string) {
    super(apiToken, domain);
    this.baseUri = `/teams/${domain}/posts`;
  }

  /**
   * Update
   * @param {Memo} entity
   * @returns {Promise<DocBaseResponse>}
   * @override
   */
  async update(entity: Memo): Promise<DocBaseResponse> {
    if (!entity.title || !entity.body) {
      throw new Error('Title or Body is null.');
    }
    if (!entity.draft) {
      entity.draft = false;
    }
    if (!entity.notice) {
      entity.notice = true;
    }
    if (!entity.scope) {
      entity.scope = DisclosureScopes.EVERYONE;
    }
    return await super.update(entity);
  }

  /**
   * Create
   * @param {Memo} entity
   * @returns {Promise<DocBaseResponse>}
   * @override
   */
  async create(entity: Memo): Promise<DocBaseResponse> {
    if (!entity.title || !entity.body) {
      throw new Error('Title or Body is null.');
    }
    if (!entity.draft) {
      entity.draft = false;
    }
    if (!entity.notice) {
      entity.notice = true;
    }
    if (!entity.scope) {
      entity.scope = DisclosureScopes.EVERYONE;
    }
    return await super.create(entity);
  }
}
