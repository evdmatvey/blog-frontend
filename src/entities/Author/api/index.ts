import axios from '@/shared/utils/axios';
import { Author } from '../model/types/author';

export const getPopularAuthors = async (): Promise<Author[]> => {
  try {
    return (await axios.get('/users/popular')).data;
  } catch (error) {
    throw error;
  }
};
