import { Memos } from './resources/Memos';
export declare class DocBase {
    private apiToken;
    private team;
    constructor(apiToken: string, team: string);
    readonly memos: Memos;
}
