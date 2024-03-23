import axios from '@/shared/utils/axios';
import { PostData } from '@/entities/Post';

export const searchPosts = async (title: string): Promise<PostData[]> => {
  try {
    return (await axios.get(`/posts/search?title=${title}`)).data;
  } catch (error) {
    throw error;
  }
};
