import { addPostTag } from '@/entities/Post';
import {
  TagData,
  selectPopularTags,
  selectTagsSearchQuery,
  setTagsSearchQuery,
  useCreateTag,
} from '@/entities/Tag';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { useEffect, useRef, useState } from 'react';

export const useTagDropdown = () => {
  const dispatch = useAppDispatch();

  const basicTags: TagData[] = useAppSelector(selectPopularTags);

  const [foundTags, setFoundTags] = useState<TagData[]>([]);
  const [tags, setTags] = useState<TagData[]>(basicTags);
  const [creatingPermission, setCreatingPermission] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);
  const tagsSearchQuery = useAppSelector(selectTagsSearchQuery);

  const addTagToSelected = (tag: TagData) => {
    dispatch(addPostTag(tag));
    dispatch(setTagsSearchQuery(''));
  };

  const createTagHandler = async () => {
    const createdTag = await useCreateTag(tagsSearchQuery);
    addTagToSelected(createdTag);
  };

  useEffect(() => {
    setCreatingPermission(foundTags.length === 0 && tagsSearchQuery.length !== 0);
    let newTags = tagsSearchQuery.length !== 0 ? foundTags : basicTags;
    newTags = newTags.length > 6 ? newTags.slice(0, 5) : newTags;
    setTags(newTags);
  }, [tagsSearchQuery, foundTags.length]);

  return {
    creatingPermission,
    listRef,
    tags,
    addTagToSelected,
    createTagHandler,
    setFoundTags,
  };
};
