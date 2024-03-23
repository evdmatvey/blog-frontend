import { User } from '@/entities/User';
import axios from '@/shared/utils/axios';

export const getMe = async (): Promise<User> => {
  return (await axios.get('/users/me')).data;
};
