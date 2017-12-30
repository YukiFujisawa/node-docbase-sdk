import { Memos } from './resources/Memos';
import { Teams } from './resources/Teams';

export class DocBase {

  constructor(private apiToken: string, private team: string) {
  }

  get memos(): Memos {
    return new Memos(this.apiToken, this.team);
  }

  get teams(): Teams {
    return new Teams(this.apiToken);
  }
}
