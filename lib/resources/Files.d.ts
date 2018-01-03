import { ResourcesBase } from './ResourcesBase';
import { File } from '../entities/File';
import { DocBaseResponse } from '../DocBaseResponse';
export declare class Files extends ResourcesBase<File> {
    constructor(apiToken: string, domain: string);
    create(entity: File): Promise<DocBaseResponse>;
}
