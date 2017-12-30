import { IResources } from './IResources';
import { DocBaseResponse } from '../DocBaseResponse';
import { RequestMethods } from '../enums/RequestMethods';
import { ApiUtil } from '../ApiUtil';

export class ResourcesBase<ENTITY> implements IResources<ENTITY> {

  private pBaseUri: string;

  constructor(private pApiToken: string, private pTeam: string = '') {
  }

  get team(): string {
    return this.pTeam;
  }

  get baseUri(): string {
    return this.pBaseUri;
  }

  set baseUri(pBaseUri: string) {
    this.pBaseUri = pBaseUri;
  }

  get apiToken(): string {
    return this.pApiToken;
  }

  async find(id: number): Promise<DocBaseResponse> {
    const uri: string = this.baseUri + `/${id}`;
    return await this.sendRequest(RequestMethods.GET, uri);
  }

  async where(condition: any = null): Promise<DocBaseResponse> {
    return await this.sendRequest(RequestMethods.GET, this.baseUri, condition);
  }

  async update(entity: ENTITY): Promise<DocBaseResponse> {
    const obj: any = entity;
    const uri: string = this.baseUri + `/${obj.id}`;
    return await this.sendRequest(RequestMethods.PATCH, uri, {}, obj);
  }

  async create(entity: ENTITY): Promise<DocBaseResponse> {
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
                    apiUri: string, params: any = {}, entity: ENTITY = null): Promise<DocBaseResponse> {
    const reqUrl = await this.getApiUrl(apiUri, params);
    return await ApiUtil.sendRequest(this.apiToken, reqMethod, reqUrl, entity);
  }
}
