import { Memos } from './resources/Memos';
import { Teams } from './resources/Teams';
import { Groups } from './resources/Groups';
import { Comments } from './resources/Comments';
import { Tags } from './resources/Tags';
import { Files } from './resources/Files';
export declare class DocBase {
    private apiToken;
    private domain;
    constructor(apiToken: string, domain?: string);
    readonly memos: Memos;
    readonly teams: Teams;
    readonly groups: Groups;
    readonly tags: Tags;
    readonly files: Files;
    comments(memoId: number): Comments;
}
