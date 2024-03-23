import axios from '@/shared/utils/axios';
import { PostData } from '@/entities/Post/model/types/PostData';
import { CreatePostDTO } from './dto/CreatePost.dto';

export const createPost = async (dto: CreatePostDTO): Promise<PostData> => {
  try {
    return (await axios.post('/posts', dto)).data;
  } catch (error) {
    throw error;
  }
};
