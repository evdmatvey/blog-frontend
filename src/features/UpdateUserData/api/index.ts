import axios from '@/shared/utils/axios';
import { UpdateDataDTO } from './dto/UpdateData.dto';
import { User } from '@/entities/User';

export const updateData = async (values: UpdateDataDTO): Promise<User> => {
  try {
    return (await axios.put('/users/update', values)).data;
  } catch (error) {
    throw error;
  }
};
