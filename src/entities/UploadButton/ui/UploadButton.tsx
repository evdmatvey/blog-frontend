import { FC } from 'react';
import Button from '@/shared/ui/Button';
import { UploadImageIcon } from '@/shared/ui/icons';
import { useUploadImage } from '../hooks/useUploadImage';

interface UploadButtonProps {
  setUrl: (url: string) => void;
  onSubmit?: () => void;
}

const UploadButton: FC<UploadButtonProps> = ({ setUrl, onSubmit }) => {
  const { inputFileRef, openFileUploadingHandler, uploadFileHandler } = useUploadImage(
    setUrl,
    onSubmit,
  );

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
