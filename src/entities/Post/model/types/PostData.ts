import { TagData } from '@/entities/Tag';
import { User } from '@/entities/User';
import { PostStatus } from './PostStatus';

export interface PostData {
  _id: string;
  author: User;
  title: string;
  desc: string;
  image: string;
  tags: TagData[];
  text: string;
  status: PostStatus;
  likes: number;
  views: number;
  createdAt: string;
}

export interface Posts {
  posts: PostData[];
  page: number;
  pages: number;
  limit: number;
}

export type PostPreviewData = Omit<PostData, 'likes' | 'views' | 'createdAt'>;
