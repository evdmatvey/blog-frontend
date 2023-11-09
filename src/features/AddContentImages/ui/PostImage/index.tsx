import React from 'react';
import Image from 'next/image';
import { selectPostImage, setPostImage } from '@/entities/Post';
import { IconOnlyUploadButton } from '@/entities/UploadButton';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { CloseIcon } from '@/shared/ui/icons';
import Button from '@/shared/ui/Button';

import styles from './PostImage.module.scss';

const PostImage = () => {
  const dispatch = useAppDispatch();

  const addPostImage = (url: string) => dispatch(setPostImage(url));
  const removePostImage = () => dispatch(setPostImage(''));

  const postImage = useAppSelector(selectPostImage);

  return (
    <div className={styles.postImage}>
      <h5>Выбранная обложка</h5>
      <div className={styles.mainImage}>
        {postImage && (
          <Image
            width={260}
            height={85}
            unoptimized
            src={process.env.NEXT_PUBLIC_API_URI + postImage}
            alt="post image"
          />
        )}
        {!postImage && <div className={styles.noMainImage}>Добавьте обложку для поста</div>}
      </div>
      <div className={styles.buttons}>
        <IconOnlyUploadButton setUrl={addPostImage} />
        <Button
          color="gray"
          size="long"
          type="icon-only"
          outlined
          withIcon
          children={<CloseIcon width={24} height={24} />}
          onClick={removePostImage}
        />
      </div>
    </div>
  );
};

export default PostImage;
