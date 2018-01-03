import { Memos } from './resources/Memos';
import { Teams } from './resources/Teams';
import { Groups } from './resources/Groups';
import { Comments } from './resources/Comments';

export class DocBase {

  constructor(private apiToken: string, private domain: string = '') {
  }

  get memos(): Memos {
    return new Memos(this.apiToken, this.domain);
  }

  get teams(): Teams {
    return new Teams(this.apiToken);
  }

  get groups(): Groups {
    return new Groups(this.apiToken, this.domain);
  }

  comments(memoId: number): Comments {
    return new Comments(this.apiToken, this.domain, memoId);
  }
}
