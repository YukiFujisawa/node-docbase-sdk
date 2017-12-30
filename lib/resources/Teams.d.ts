import { Team } from '../entities/Team';
import { ResourcesBase } from './ResourcesBase';
export declare class Teams extends ResourcesBase<Team> {
    constructor(apiToken: string, team?: string);
}
