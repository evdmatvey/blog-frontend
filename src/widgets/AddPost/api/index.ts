import axios from '@/shared/utils/axios';
import { CreatePostDTO } from './dto/create-post.dto';
import { PostData } from '@/entities/Post/model/types/PostData';

export const createPost = async (dto: CreatePostDTO): Promise<PostData> => {
  try {
    return (await axios.post('/posts', dto)).data;
  } catch (error) {
    throw error;
  }
};
