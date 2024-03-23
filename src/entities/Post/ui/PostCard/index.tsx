import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { PostData } from '@/entities/Post';

import styles from './PostCard.module.scss';
import { ArrowRightIcon, LikeIcon, ViewIcon } from '@/shared/ui/icons';

interface PostCardProps {
  post: PostData;
  type: 'basic' | 'bigger';
}

const PostCard: FC<PostCardProps> = ({ post, type }) => {
  const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <article className={`${styles.root} ${styles[type]}`}>
      <div ref={ref} className={styles.image}>
        {inView && (
          <Image
            width={440}
            height={140}
            unoptimized
            src={process.env.NEXT_PUBLIC_API_URI + post.image}
            alt={post.title}
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.author}>{post.author.nickname}</div>
          <div className={styles.metrics}>
            <div>
              <ViewIcon width={20} height={20} />
              {post.views}
            </div>
            <div>
              <LikeIcon width={20} height={20} />
              {post.likes}
            </div>
          </div>
        </div>
        <div className={styles.tags}>
          {/* TODO: Add links for tag */}
          {post.tags.slice(0, 3).map((tag) => (
            <div key={tag._id}>{tag.title}</div>
          ))}
          {post.tags.length > 3 && <div>...</div>}
        </div>
        <div className={styles.text}>
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
        </div>
        <Link href={`/posts/${post._id}`} className={styles.link}>
          Читать полностью
          <ArrowRightIcon width={24} height={24} />
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
