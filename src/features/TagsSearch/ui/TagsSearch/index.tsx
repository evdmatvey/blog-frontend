import { FC } from 'react';
import { TagData } from '@/entities/Tag';
import Input from '@/shared/ui/Input';
import { useSearchTags } from '../../hooks/useTagSearch';

import styles from './TagsSearch.module.scss';

interface TagsSearchProps {
  setTags: (tags: TagData[]) => void;
  onFocus?: () => void;
}

const TagsSearch: FC<TagsSearchProps> = ({ setTags, onFocus }) => {
  const { changeTitleHandler, searchQuery } = useSearchTags(setTags);

  return (
    <div className={styles.root}>
      <Input
        placeholder='Название тега, "react.js"'
        onChange={changeTitleHandler}
        defaultValue={searchQuery}
        onFocus={onFocus}
      />
    </div>
  );
};

export default TagsSearch;
