import { FC } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { CloseIcon, CopyIcon } from '@/shared/ui/icons';
import { useAppDispatch } from '@/shared/hooks';
import Button from '@/shared/ui/Button';
import { ImageData } from '../../model/types/image';
import { removeImage } from '../../model/store/content-images.slice';

import styles from './ContentImage.module.scss';

interface ContentImageProps {
  image: ImageData;
}

const ContentImage: FC<ContentImageProps> = ({ image }) => {
  const dispatch = useAppDispatch();

  const removeImageHandler = () => dispatch(removeImage(image));

  const copyImageUrlHandler = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_API_URI + image.url).then(
      () => toast.success('Вы успешно скопировали адрес изображения'),
      () => toast.error('Произошла ошибка при копировании в буфер обмена'),
    );
  };

  return (
    <div className={styles.root}>
      <Image
        width={120}
        height={60}
        unoptimized
        src={process.env.NEXT_PUBLIC_API_URI + image.url}
        alt={image.url}
      />
      <div className={styles.buttons}>
        <Button
          color="gray"
          size="long"
          type="icon-only"
          outlined
          withIcon
          children={<CopyIcon />}
          onClick={copyImageUrlHandler}
        />
        <Button
          color="gray"
          size="long"
          type="icon-only"
          outlined
          withIcon
          children={<CloseIcon width={24} height={24} />}
          onClick={removeImageHandler}
        />
      </div>
    </div>
  );
};

export default ContentImage;
