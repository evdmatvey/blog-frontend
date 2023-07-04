import { ChangeEvent, FC, useRef } from 'react';
import { toast } from 'react-toastify';
import Button from '@/shared/ui/Button';
import { UploadImageIcon } from '@/shared/ui/icons';
import * as Api from '../api';

interface UploadButtonProps {
  setUrl: (url: string) => void;
  onSubmit?: () => void;
}

const UploadButton: FC<UploadButtonProps> = ({ setUrl, onSubmit }) => {
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

  return (
    <>
      <Button
        color="base"
        size="medium"
        withIcon
        outlined
        type="common"
        onClick={openFileUploadingHandler}>
        <UploadImageIcon />
        Загрузить изображение
      </Button>
      <input ref={inputFileRef} type="file" onChange={uploadFileHandler} hidden />
    </>
  );
};

export default UploadButton;
