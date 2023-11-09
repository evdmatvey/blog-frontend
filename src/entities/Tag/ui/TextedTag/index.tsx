import { FC } from 'react';
import { TagData } from '../../model/types/TagData';

import styles from './TextedTag.module.scss';

interface TextedTagProps {
  tag: TagData;
  onClick?: () => void;
}

const TextedTag: FC<TextedTagProps> = ({ tag, onClick }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      {tag.title}
    </div>
  );
};

export default TextedTag;
