import axios from '@/shared/utils/axios';
import { PostData } from '@/entities/Post/model/types/PostData';

export const getNewPosts = async (limit: number): Promise<PostData[]> => {
  try {
    return (await axios.get(`/posts/new?limit=${limit}`)).data;
  } catch (error) {
    throw error;
  }
};
