import { Team } from '../entities/Team';
import { ResourcesBase } from './ResourcesBase';

export class Teams extends ResourcesBase<Team> {
  constructor(apiToken: string, team: string = '') {
    super(apiToken, team);
    this.baseUri = '/teams';
  }
}
