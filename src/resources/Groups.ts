import { ResourcesBase } from './ResourcesBase';
import { Group } from '../entities/Group';

export class Groups extends ResourcesBase<Group> {
  constructor(apiToken: string, team: string) {
    super(apiToken, team);
    this.baseUri = `/teams/${team}/groups`;
  }
}
