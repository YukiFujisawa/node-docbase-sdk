import { DocBaseResponse } from '../DocBaseResponse';
import { ResourcesBase } from './ResourcesBase';
import { Comment } from '../entities/Comment';
export declare class Comments extends ResourcesBase<Comment> {
    private pMemoId;
    constructor(apiToken: string, domain: string, memoId: number);
    /**
     * Create
     * @param {Comment} entity
     * @returns {Promise<DocBaseResponse>}
     */
    create(entity: Comment): Promise<DocBaseResponse>;
    delete(id: number): Promise<DocBaseResponse>;
}
