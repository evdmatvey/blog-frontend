import * as Api from '../api';

export const useCreateTag = async (title: string) => {
  const createdTag = await Api.createTag({ title });

  return createdTag;
};
