import { SearchPosts } from '@/features/SearchPosts';
import SidebarVariants from '../SidebarVariants';
import SidebarTags from '../SidebarTags';
import SidebarAuthors from '../SidebarAuthors';

import styles from './PostsSidebar.module.scss';
import { useGetWindowSize } from '@/shared/hooks';
import SidebarVariantsDropdown from '../SidebarVariantsDropdown';
import SidebarAuthorsDropdown from '../SidebarAuthorsDropdown';
import SidebarTagsDropdown from '../SidebarTagsDropdown';

const PostsSidebar = () => {
  const { width } = useGetWindowSize();

  return (
    <aside className={styles.root}>
      <SearchPosts />
      {width && width > 1050 ? (
        <div className={styles.wrapper}>
          <SidebarVariants />
          <SidebarTags />
          <SidebarAuthors />
        </div>
      ) : (
        <>
          <SidebarVariantsDropdown />
          <SidebarTagsDropdown />
          <SidebarAuthorsDropdown />
        </>
      )}
    </aside>
  );
};

export default PostsSidebar;
