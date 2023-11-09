import { ChangeEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import * as Api from '../api';

export const useUploadImage = (setUrl: (url: string) => void, onSubmit?: () => void) => {
  const inputFileRef = useRef<null | HTMLInputElement>(null);

  const uploadFileHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      const file = event.target.files?.item(0);
      if (file) {
        if (onSubmit) {
          onSubmit();
        }
        formData.append('file', file);
        const data = await Api.uploadFile({ formData });
        setUrl(data.url);
        toast.success('Вы успешно загрузили изображение');
      }
    } catch (err) {
      toast.error('Ошибка при загрузке файла');
    }
  };

  const openFileUploadingHandler = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return {
    inputFileRef,
    openFileUploadingHandler,
    uploadFileHandler,
  };
};
