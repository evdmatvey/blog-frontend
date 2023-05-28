import axios from '@/core/axios';
import {
  LoginFormDTO,
  LoginResponseDTO,
  RegistrationFromDTO,
  RegistrationResponseDTO,
} from './dto/auth.dto';
import { User } from '@/types/user.type';

export const login = async (values: LoginFormDTO): Promise<LoginResponseDTO> => {
  try {
    return (await axios.post('/auth/login', values)).data;
  } catch (error) {
    throw error;
  }
};

export const register = async (values: RegistrationFromDTO): Promise<RegistrationResponseDTO> => {
  try {
    return (await axios.post('/auth/register', values)).data;
  } catch (error) {
    throw error;
  }
};
