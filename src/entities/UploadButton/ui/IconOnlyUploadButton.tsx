import { FC } from 'react';
import Button from '@/shared/ui/Button';
import { UploadImageIcon } from '@/shared/ui/icons';
import { useUploadImage } from '../hooks/useUploadImage';

interface IconOnlyUploadButtonProps {
  setUrl: (url: string) => void;
  onSubmit?: () => void;
}

const IconOnlyUploadButton: FC<IconOnlyUploadButtonProps> = ({ setUrl, onSubmit }) => {
  const { inputFileRef, openFileUploadingHandler, uploadFileHandler } = useUploadImage(
    setUrl,
    onSubmit,
  );

  return (
    <>
      <Button
        color="gray"
        size="long"
        type="icon-only"
        outlined
        withIcon
        children={<UploadImageIcon width={24} height={24} />}
        onClick={openFileUploadingHandler}
      />
      <input ref={inputFileRef} type="file" onChange={uploadFileHandler} hidden />
    </>
  );
};

export default IconOnlyUploadButton;
