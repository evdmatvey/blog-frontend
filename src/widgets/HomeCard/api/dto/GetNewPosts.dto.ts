import { PostData } from '@/entities/Post';

export interface GetNewPostsResponse {
  posts: PostData[];
  pages: number;
  currentPage: number;
  limit: number;
}
