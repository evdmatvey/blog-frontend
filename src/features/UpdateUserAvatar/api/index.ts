import axios from '@/shared/utils/axios';
import { UpdateUserAvatarDTO } from './dto/UpdateAvatar.dto';
import { User } from '@/entities/User';

export const updateAvatar = async (values: UpdateUserAvatarDTO): Promise<User> => {
  try {
    return (await axios.put('/users/update', values)).data;
  } catch (error) {
    throw error;
  }
};
