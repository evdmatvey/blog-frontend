import axios from '@/shared/utils/axios';
import { TagData } from '../model/types/TagData';

export const getPopularTags = async (): Promise<TagData[]> => {
  try {
    return (await axios.get('/tags/popular')).data;
  } catch (error) {
    throw error;
  }
};
