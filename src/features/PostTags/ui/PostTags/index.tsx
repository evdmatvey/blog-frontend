import { FC } from 'react';
import { Tag, TagData } from '@/entities/Tag';
import styles from './PostTags.module.scss';

interface PostTagsProps {
  tags: TagData[];
}

const PostTags: FC<PostTagsProps> = ({ tags }) => {
  return (
    <div className={styles.root}>
      {tags.map((tag) => (
        <Tag key={tag._id} tag={tag} />
      ))}
    </div>
  );
};

export default PostTags;
