import { GetPostsByUserVariant, GetPostsResponse, GetPostsVariant } from '@/entities/Post';
import axios from '@/shared/utils/axios';

export const getPosts = async (
  variant: GetPostsVariant,
  page: number,
  limit: number,
  tagId: string,
  authorId: string,
): Promise<GetPostsResponse> => {
  try {
    return (
      await axios.get(
        `/posts/approved?variant=${variant}&page=${page}&limit=${limit}&tagId=${tagId}&authorId=${authorId}`,
      )
    ).data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByUser = async (
  variant: GetPostsByUserVariant,
  page: number,
  limit: number,
): Promise<GetPostsResponse> => {
  try {
    return (await axios.get(`/posts/by-user?variant=${variant}&page=${page}&limit=${limit}`)).data;
  } catch (error) {
    throw error;
  }
};
