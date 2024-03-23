import { toast } from 'react-toastify';
import {
  selectPostsFilters,
  selectPostsPagination,
  setPostsFiltersAuthorId,
  setPostsFiltersTagId,
  GetPostsVariants,
  fetchPosts,
} from '@/entities/Post';
import { activeClass } from '@/entities/SidebarElement';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

export const useSidebarVariants = () => {
  const dispatch = useAppDispatch();
  const { variant, tagId, authorId } = useAppSelector(selectPostsFilters);
  const { limit } = useAppSelector(selectPostsPagination);

  const selectVariantHandler = async (newVariant: GetPostsVariants) => {
    dispatch(setPostsFiltersAuthorId(''));
    dispatch(setPostsFiltersTagId(''));

    dispatch(fetchPosts({ variant: newVariant, page: 1, limit, authorId, tagId, type: 'set' }))
      .unwrap()
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const isActive = (targetVariant: GetPostsVariants) => {
    return variant === targetVariant ? activeClass : '';
  };

  return {
    selectVariantHandler,
    isActive,
    variant,
  };
};
