import { selectPopularTags } from '@/entities/Tag';
import { activeClass } from '@/entities/SidebarElement';
import {
  selectPostsFilters,
  selectPostsPagination,
  setPostsFiltersTagId,
  fetchPosts,
} from '@/entities/Post';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

export const useSidebarTags = () => {
  const dispatch = useAppDispatch();
  const { tagId, authorId } = useAppSelector(selectPostsFilters);
  const { limit } = useAppSelector(selectPostsPagination);
  const popularTags = useAppSelector(selectPopularTags);

  const selectTagHandler = async (newTagId: string) => {
    if (newTagId === tagId) {
      dispatch(setPostsFiltersTagId(''));
      newTagId = '';
    } else {
      dispatch(setPostsFiltersTagId(newTagId));
    }

    dispatch(
      fetchPosts({ variant: 'filter', page: 1, limit, authorId, tagId: newTagId, type: 'set' }),
    );
  };

  const isActive = (value: string) => {
    return tagId === value ? activeClass : '';
  };

  return { tagId, popularTags, selectTagHandler, isActive };
};
