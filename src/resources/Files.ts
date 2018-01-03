import { ResourcesBase } from './ResourcesBase';
import { File } from '../entities/File';
import { DocBaseResponse } from '../DocBaseResponse';
import { ApiUtil } from '../ApiUtil';
import * as fs from 'fs';


export class Files extends ResourcesBase<File> {
  constructor(apiToken: string, domain: string) {
    super(apiToken, domain);
    this.baseUri = `/teams/${domain}/attachments`;
  }

  async create(entity: File): Promise<DocBaseResponse> {
    const isFileOk = await ApiUtil.checkUploadFile(entity.file_path);
    if (isFileOk) {
      const buffer: Buffer = fs.readFileSync(entity.file_path);
      entity.content = buffer.toString('base64');
    }
    return await super.create(entity);
  }
}
