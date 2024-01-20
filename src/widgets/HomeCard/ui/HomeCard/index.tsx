import { FC } from 'react';
import { PostCard, PostData } from '@/entities/Post';
import PageTitle from '@/shared/ui/PageTitle';

import styles from './HomeCard.module.scss';

interface HomeCardProps {
  posts: PostData[];
}

const HomeCard: FC<HomeCardProps> = ({ posts }) => {
  return (
    <>
      <PageTitle text="Последнии статьи" />
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} type="basic" />
        ))}
      </div>
    </>
  );
};

export default HomeCard;
