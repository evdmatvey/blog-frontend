export type GetPostsVariant = 'basic' | 'popular' | 'new' | 'filter';
export type GetPostsByUserVariant = 'liked' | 'bookmarks';

export type GetPostsVariants = GetPostsVariant | GetPostsByUserVariant;

export interface PostsFilers {
  variant: GetPostsVariants;
  tagId: string;
  authorId: string;
}
