import { IResources } from './IResources';
import { DocBaseResponse } from '../DocBaseResponse';
import { RequestMethods } from '../enums/RequestMethods';
import { ApiUtil } from '../ApiUtil';
import { HttpStatus } from '../enums/HttpStatus';

export class ResourcesBase<ENTITY> implements IResources<ENTITY> {

  private pBaseUri: string;

  constructor(private pApiToken: string, private pDomain: string = '') {
  }

  get domain(): string {
    return this.pDomain;
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
    const response: DocBaseResponse = await this.sendRequest(RequestMethods.GET, uri);
    if (response.status === HttpStatus.OK && response.body) {
      response.body.domain = this.domain;
    }
    return response;
  }

  async list(condition: any = null): Promise<DocBaseResponse> {
    const response: DocBaseResponse =
      await this.sendRequest(RequestMethods.GET, this.baseUri, condition);
    if (response.status === HttpStatus.OK && response.body) {
      response.body.domain = this.domain;
    }
    return response;
  }

  async update(entity: ENTITY): Promise<DocBaseResponse> {
    const obj: any = entity;
    const uri: string = this.baseUri + `/${obj.id}`;
    const response: DocBaseResponse =
      await this.sendRequest(RequestMethods.PATCH, uri, {}, obj);
    if (response.status === HttpStatus.OK && response.body) {
      response.body.domain = this.domain;
    }
    return response;
  }

  async create(entity: ENTITY): Promise<DocBaseResponse> {
    const response: DocBaseResponse =
      await this.sendRequest(RequestMethods.POST, this.baseUri, {}, entity);
    if (response.status === HttpStatus.OK && response.body) {
      response.body.domain = this.domain;
    }
    return response;
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
