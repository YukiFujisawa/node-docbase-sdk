import { Memos } from './resources/Memos';
import { Teams } from './resources/Teams';
import { Groups } from './resources/Groups';
import { Comments } from './resources/Comments';
export declare class DocBase {
    private apiToken;
    private domain;
    constructor(apiToken: string, domain?: string);
    readonly memos: Memos;
    readonly teams: Teams;
    readonly groups: Groups;
    comments(memoId: number): Comments;
}
