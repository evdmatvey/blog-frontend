import axios from '@/shared/utils/axios';
import { UpdatePasswordDTO } from './dto/UpdatePassword.dto';
import { User } from '@/entities/User';

export const updatePassword = async (values: UpdatePasswordDTO): Promise<User> => {
  try {
    return (await axios.put('/users/update/password', values)).data;
  } catch (error) {
    throw error;
  }
};
