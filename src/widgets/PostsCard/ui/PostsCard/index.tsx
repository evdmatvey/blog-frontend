import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PostsSidebar } from '@/features/PostsSidebar';
import {
  PostCard,
  selectPostsIsLoading,
  selectPosts,
  selectPostsFilters,
  selectPostsPagination,
  fetchPosts,
} from '@/entities/Post';
import { Loader } from '@/entities/Loader';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import PageTitle from '@/shared/ui/PageTitle';

import styles from './PostsCard.module.scss';

const PostsCard = () => {
  const dispatch = useAppDispatch();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { variant, authorId, tagId } = useAppSelector(selectPostsFilters);
  const { limit, page, pages } = useAppSelector(selectPostsPagination);
  const posts = useAppSelector(selectPosts);
  const isLoading = useAppSelector(selectPostsIsLoading);

  useEffect(() => {
    if (inView && pages > +page) {
      dispatch(fetchPosts({ variant, page: +page + 1, limit, tagId, authorId, type: 'add' }));
    }
  }, [inView]);

  return (
    <>
      <PageTitle text="Статьи" />
      <div className={styles.wrapper}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post._id} type="bigger" post={post} />
          ))}
          {!posts.length && <div className={styles.empty}>Статьи не найдены</div>}
        </div>
        <PostsSidebar />
      </div>
      <div ref={ref}></div>
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default PostsCard;
