import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { setPosts, setPostsFiltersVariant } from '@/entities/Post';
import { useAppDispatch } from '@/shared/hooks';
import * as Api from '../api';

export const useSearchPosts = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const searchPosts = useCallback(
    debounce(async (title: string) => {
      const posts = await Api.searchPosts(title);
      dispatch(setPosts({ posts }));
      dispatch(setPostsFiltersVariant(''));
    }, 300),
    [],
  );

  const changeTitleHandler = (value: string) => {
    searchPosts(value);
    setSearchQuery(value);
  };

  return { searchQuery, changeTitleHandler };
};
