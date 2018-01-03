import { Tag } from '../entities/Tag';
import { ResourcesBase } from './ResourcesBase';


export class Tags extends ResourcesBase<Tag> {
  constructor(apiToken: string, domain: string) {
    super(apiToken, domain);
    this.baseUri = `/teams/${domain}/tags`;
  }
}
