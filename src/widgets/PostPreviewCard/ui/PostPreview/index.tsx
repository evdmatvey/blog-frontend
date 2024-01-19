import Link from 'next/link';
import Image from 'next/image';
import {
  selectPostDesc,
  selectPostImage,
  selectPostTags,
  selectPostText,
  selectPostTitle,
} from '@/entities/Post';
import { useAppSelector } from '@/shared/hooks';
import { PostTags } from '@/features/PostTags';
import { PostText } from '@/features/PostText';
import PageTitle from '@/shared/ui/PageTitle';
import { BackIcon } from '@/shared/ui/icons';

import styles from './PostPreview.module.scss';

const PostPreview = () => {
  const title = useAppSelector(selectPostTitle) || 'Придумайте название для статьи';
  const tags = useAppSelector(selectPostTags) || [];
  const desc = useAppSelector(selectPostDesc) || 'Придумайте описание для статьи';
  const image = useAppSelector(selectPostImage);
  const text = useAppSelector(selectPostText);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.title}>
            <Link href="/add-post" title="Назад">
              <BackIcon height={30} width={30} />
            </Link>
            <PageTitle text={title} />
          </div>
          <PostTags tags={tags} />
          <div className={styles.desc}>{desc}</div>
        </div>
        <div className={styles.image}>
          {image && (
            <Image
              width={600}
              height={300}
              unoptimized
              src={process.env.NEXT_PUBLIC_API_URI + image}
              alt={title}
            />
          )}
        </div>
      </div>
      <PostText text={text || ''} />
    </>
  );
};

export default PostPreview;
