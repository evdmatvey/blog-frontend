import axios from '@/shared/utils/axios';
import { CreateTagRequest, CreateTagResponse } from './dto/CreateTag.dto';

export const createTag = async (values: CreateTagRequest): Promise<CreateTagResponse> => {
  try {
    return (await axios.post('/tags', values)).data;
  } catch (error) {
    throw error;
  }
};
