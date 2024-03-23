import Input from '@/shared/ui/Input';
import { useSearchPosts } from '../../hooks/useSearchPosts';

import styles from './SearchPosts.module.scss';

const SearchPosts = () => {
  const { changeTitleHandler, searchQuery } = useSearchPosts();

  return (
    <div className={styles.root}>
      <Input placeholder="Поиск..." onChange={changeTitleHandler} defaultValue={searchQuery} />
    </div>
  );
};

export default SearchPosts;
