import { FC } from 'react';
import { TagData } from '../../model/types/TagData';

import styles from './Tag.module.scss';
import { CloseIcon } from '@/shared/ui/icons';

interface TagProps {
  tag: TagData;
  onClick?: (tag: TagData) => void;
  onRemove?: (tag: TagData) => void;
}

const Tag: FC<TagProps> = ({ tag, onClick, onRemove }) => {
  if (onRemove) {
    return (
      <div className={styles.root}>
        {tag.title}
        <span onClick={() => onRemove(tag)}>
          <CloseIcon width={14} height={14} />
        </span>
      </div>
    );
  }

  return onClick ? (
    <div className={styles.root} onClick={() => onClick(tag)}>
      {tag.title}
    </div>
  ) : (
    <div className={styles.root}>{tag.title}</div>
  );
};

export default Tag;
