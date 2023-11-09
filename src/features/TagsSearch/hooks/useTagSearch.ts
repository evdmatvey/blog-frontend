import { useCallback } from 'react';
import debounce from 'lodash.debounce';
import { TagData, selectTagsSearchQuery, setTagsSearchQuery } from '@/entities/Tag';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import * as Api from '../api';

type searchTagsCallBack = (tags: TagData[]) => void;

export const useSearchTags = (setTags: searchTagsCallBack) => {
  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector(selectTagsSearchQuery);

  const searchTags = useCallback(
    debounce(async (title: string) => {
      const tags = await Api.searchTag({ title });
      setTags(tags);
    }, 300),
    [],
  );

  const changeTitleHandler = (value: string) => {
    dispatch(setTagsSearchQuery(value));
    searchTags(value);
  };

  return { searchQuery, changeTitleHandler };
};
