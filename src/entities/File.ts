import { DocBaseEntity } from './DocBaseEntity';

export namespace FileFields {
  export type name = string;
  export type file_path = string;
  export type content = string;
  export type size = number;
  export type url = string;
  export type markdown = string;
  export type created_at = Date;
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
