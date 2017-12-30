import { IResources } from './IResources';
import { DocBaseResponse } from '../DocBaseResponse';
import { RequestMethods } from '../enums/RequestMethods';
export declare class ResourcesBase<ENTITY> implements IResources<ENTITY> {
    private pApiToken;
    private pTeam;
    private pBaseUri;
    constructor(pApiToken: string, pTeam?: string);
    readonly team: string;
    baseUri: string;
    readonly apiToken: string;
    find(id: number): Promise<DocBaseResponse>;
    list(condition?: any): Promise<DocBaseResponse>;
    update(entity: ENTITY): Promise<DocBaseResponse>;
    create(entity: ENTITY): Promise<DocBaseResponse>;
    delete(id: number): Promise<DocBaseResponse>;
    getApiUrl(apiUri: string, params?: any): Promise<string>;
    sendRequest(reqMethod: RequestMethods, apiUri: string, params?: any, entity?: ENTITY): Promise<DocBaseResponse>;
}
