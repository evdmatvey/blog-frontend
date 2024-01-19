import { addImage, selectContentImages } from '@/features/AddContentImages';
import { UploadButton } from '@/entities/UploadButton';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ImageIcon } from '@/shared/ui/icons';
import ContentImage from '../ContentImage';
import PostImage from '../PostImage';

import styles from './ImagesPopup.module.scss';

const ImagesPopup = () => {
  const dispatch = useAppDispatch();

  const addImageHandler = (url: string) => dispatch(addImage({ url }));
  const contentImages = useAppSelector(selectContentImages);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h4>
          <ImageIcon height={30} width={30} />
          Загруженные контентные изображения
        </h4>
        <UploadButton setUrl={addImageHandler} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.contentImages}>
          {!!contentImages.length && contentImages.map((image) => <ContentImage image={image} />)}
          {!contentImages.length && <div>Добавьте контентные картинки</div>}
        </div>
        <PostImage />
      </div>
    </div>
  );
};

export default ImagesPopup;
