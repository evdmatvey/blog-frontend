import { selectPopularAuthors } from '@/entities/Author';
import { activeClass } from '@/entities/SidebarElement';
import {
  selectPostsFilters,
  selectPostsPagination,
  setPostsFiltersAuthorId,
  fetchPosts,
} from '@/entities/Post';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

export const useSidebarAuthors = () => {
  const dispatch = useAppDispatch();
  const { tagId, authorId } = useAppSelector(selectPostsFilters);
  const { limit } = useAppSelector(selectPostsPagination);
  const popularAuthors = useAppSelector(selectPopularAuthors);

  const selectAuthorHandler = async (newAuthorId: string) => {
    if (newAuthorId === authorId) {
      dispatch(setPostsFiltersAuthorId(''));
      newAuthorId = '';
    } else {
      dispatch(setPostsFiltersAuthorId(newAuthorId));
    }

    dispatch(
      fetchPosts({ variant: 'filter', page: 1, limit, authorId: newAuthorId, tagId, type: 'set' }),
    );
  };

  const isActive = (value: string) => {
    return authorId === value ? activeClass : '';
  };

  return {
    popularAuthors,
    selectAuthorHandler,
    isActive,
    authorId,
  };
};
