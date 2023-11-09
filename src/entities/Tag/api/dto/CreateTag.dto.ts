import { TagData } from '@/entities/Tag';

export interface CreateTagRequest {
  title: string;
}

export type CreateTagResponse = TagData;
