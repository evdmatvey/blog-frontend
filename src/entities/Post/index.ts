import PostCard from './ui/PostCard';

export type {
  PostsFilers,
  GetPostsVariant,
  GetPostsByUserVariant,
  GetPostsVariants,
} from './model/types/PostsFilters';
export type { PostData } from './model/types/PostData';
export type { GetPostsResponse } from './api/dto/getPosts.dto';

export * from './model/store/post.slice';
export * as PostApi from './api';
export { PostCard };
