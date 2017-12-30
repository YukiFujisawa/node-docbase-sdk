import { DocBaseResponse } from '../DocBaseResponse';
import { Memo } from '../entities/Memo';
import { ResourcesBase } from './ResourcesBase';
export declare class Memos extends ResourcesBase<Memo> {
    constructor(apiToken: string, team: string);
    /**
     * Update
     * @param {Memo} entity
     * @returns {Promise<DocBaseResponse>}
     * @override
     */
    update(entity: Memo): Promise<DocBaseResponse>;
    /**
     * Create
     * @param {Memo} entity
     * @returns {Promise<DocBaseResponse>}
     * @override
     */
    create(entity: Memo): Promise<DocBaseResponse>;
}
