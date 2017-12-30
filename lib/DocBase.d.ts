import { Memos } from './resources/Memos';
import { Teams } from './resources/Teams';
export declare class DocBase {
    private apiToken;
    private team;
    constructor(apiToken: string, team: string);
    readonly memos: Memos;
    readonly teams: Teams;
}
