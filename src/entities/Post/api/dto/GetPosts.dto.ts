import { PostData } from '@/entities/Post';

export interface GetPostsResponse {
  posts: PostData[];
  pages: number;
  currentPage: number;
  limit: number;
}
