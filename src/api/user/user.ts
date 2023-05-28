import axios from '@/core/axios';
import { User } from '@/types/user.type';

export const getMe = async (): Promise<User> => {
  return (await axios.get('/users/me')).data;
};
