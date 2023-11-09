import { TagData } from '@/entities/Tag';

export interface SearchTagDTO {
  title: string;
}

export type SearchTagResponse = TagData[];
