import { IResources } from './IResources';
import { DocBaseResponse } from '../DocBaseResponse';
import { RequestMethods } from '../enums/RequestMethods';
import { ApiUtil } from '../ApiUtil';
import { Memo } from '../entities/Memo';
import { DisclosureScopes } from '../enums/DisclosureScopes';

export class Memos implements IResources<Memo> {

  private baseUri: string;

  constructor(private team: string, private apiToken: string) {
    this.baseUri = `/teams/${team}/posts`;
  }

  async find(id: number): Promise<DocBaseResponse> {
    const uri: string = this.baseUri + `/${id}`;
    return await this.sendRequest(RequestMethods.GET, uri);
  }

  async where(condition: any): Promise<DocBaseResponse> {
    const cond: any = condition;
    if (!cond.q) {
      cond.q = '*';
    }
    if (!cond.page) {
      cond.page = 1;
    }
    if (!cond.perPage) {
      cond.perPage = 20;
    }
    return await this.sendRequest(RequestMethods.GET, this.baseUri, cond);
  }

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
    const uri: string = this.baseUri + `/${entity.id}`;
    return await this.sendRequest(RequestMethods.PATCH, uri);
  }

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
    return await this.sendRequest(RequestMethods.POST, this.baseUri, {}, entity);
  }

  async delete(id: number): Promise<DocBaseResponse> {
    const uri: string = this.baseUri + `/${id}`;
    return await this.sendRequest(RequestMethods.DELETE, uri);
  }

  async getApiUrl(apiUri: string, params: any = {}): Promise<string> {
    return ApiUtil.getApiUrl(apiUri, params);
  }

  async sendRequest(reqMethod: RequestMethods,
                    apiUri: string, params: any = {}, entity: Memo = <Memo>{}): Promise<DocBaseResponse> {
    const reqUrl = await this.getApiUrl(apiUri, params);
    return await ApiUtil.sendRequest(this.apiToken, reqMethod, reqUrl, entity);
  }
}
