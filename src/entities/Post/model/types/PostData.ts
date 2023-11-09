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
}
