import { IResources } from './IResources';
import { DocBaseResponse } from '../DocBaseResponse';
import { RequestMethods } from '../enums/RequestMethods';
import { Memo } from '../entities/Memo';
export declare class Memos implements IResources<Memo> {
    private team;
    private apiToken;
    private baseUri;
    constructor(team: string, apiToken: string);
    find(id: number): Promise<DocBaseResponse>;
    where(condition: any): Promise<DocBaseResponse>;
    update(entity: Memo): Promise<DocBaseResponse>;
    create(entity: Memo): Promise<DocBaseResponse>;
    delete(id: number): Promise<DocBaseResponse>;
    getApiUrl(apiUri: string, params?: any): Promise<string>;
    sendRequest(reqMethod: RequestMethods, apiUri: string, params?: any, entity?: Memo): Promise<DocBaseResponse>;
}
