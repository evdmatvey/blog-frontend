import axios from '@/shared/utils/axios';
import { SearchTagDTO, SearchTagResponse } from './dto/SearchTag.dto';

export const searchTag = async (values: SearchTagDTO): Promise<SearchTagResponse> => {
  try {
    return (await axios.get(`/tags/search?title=${values.title}`)).data;
  } catch (error) {
    throw error;
  }
};
