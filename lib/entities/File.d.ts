import { DocBaseEntity } from './DocBaseEntity';
export declare namespace FileFields {
    type name = string;
    type file_path = string;
    type content = string;
    type size = number;
    type url = string;
    type markdown = string;
    type created_at = Date;
}
export interface File extends DocBaseEntity {
    name: FileFields.name;
    file_path: FileFields.file_path;
    content: FileFields.content;
    size: FileFields.size;
    url: FileFields.url;
    markdown: FileFields.markdown;
    created_at: FileFields.created_at;
}
