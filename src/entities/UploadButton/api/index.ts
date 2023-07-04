import axios from '@/shared/utils/axios';
import { UploadFileRequestDTO, UploadFileResponseDTO } from './dto/UploadFile.dto';

export const uploadFile = async (values: UploadFileRequestDTO): Promise<UploadFileResponseDTO> => {
  try {
    return (await axios.post('/files/upload', values.formData)).data;
  } catch (error) {
    throw error;
  }
};
