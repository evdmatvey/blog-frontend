import axios from '@/shared/utils/axios';
import { GetNewPostsResponse } from './dto/GetNewPosts.dto';

export const getNewPosts = async (limit: number): Promise<GetNewPostsResponse> => {
  try {
    return (await axios.get(`/posts/approved?variant=new&page=1&limit=${limit}&tagId=&author=`))
      .data;
  } catch (error) {
    throw error;
  }
};
