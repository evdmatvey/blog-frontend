import { addPostTag } from '@/entities/Post';
import { TagData, selectTagsSearchQuery, setTagsSearchQuery, useCreateTag } from '@/entities/Tag';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { useEffect, useRef, useState } from 'react';

export const useTagDropdown = () => {
  const dispatch = useAppDispatch();

  // TODO: Change this later to the real popular tags will be getting from the backend.
  const basicTags: TagData[] = [
    {
      _id: '64b642d0c0d18ad32c12ccdc',
      title: '#react.js',
    },
    {
      _id: '64b642e9c0d18ad32c12cce2',
      title: '#nest.js',
    },
    {
      _id: '65279989497db777b93a92b8',
      title: '#vue.js',
    },
    {
      _id: '6527bf31497db777b93a92db',
      title: '#todo',
    },
  ];

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
