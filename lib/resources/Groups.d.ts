import { ResourcesBase } from './ResourcesBase';
import { Group } from '../entities/Group';
export declare class Groups extends ResourcesBase<Group> {
    constructor(apiToken: string, team: string);
}
