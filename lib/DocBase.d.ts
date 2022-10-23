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
    get memos(): Memos;
    get teams(): Teams;
    get groups(): Groups;
    get tags(): Tags;
    get files(): Files;
    comments(memoId: number): Comments;
}
