import { Memos } from './resources/Memos';

export class DocBase {

  constructor(private apiToken: string, private team: string) {
  }

  get memos(): Memos {
    return new Memos(this.team, this.apiToken);
  }
}
