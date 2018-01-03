import { Team } from '../entities/Team';
import { ResourcesBase } from './ResourcesBase';

export class Teams extends ResourcesBase<Team> {
  constructor(apiToken: string, domain: string = '') {
    super(apiToken, domain);
    this.baseUri = '/teams';
  }
}
