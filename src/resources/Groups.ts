import { ResourcesBase } from './ResourcesBase';
import { Group } from '../entities/Group';

export class Groups extends ResourcesBase<Group> {
  constructor(apiToken: string, domain: string) {
    super(apiToken, domain);
    this.baseUri = `/teams/${domain}/groups`;
  }
}
