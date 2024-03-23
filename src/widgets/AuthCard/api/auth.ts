import axios from '@/shared/utils/axios';
import {
  LoginFormDTO,
  LoginResponseDTO,
  RegistrationFromDTO,
  RegistrationResponseDTO,
} from './dto/Auth.dto';

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
