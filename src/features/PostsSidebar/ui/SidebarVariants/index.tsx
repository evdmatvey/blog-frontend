import { SidebarElement } from '@/entities/SidebarElement';
import { BookmarkIcon, BooksIcon, ClipboardIcon, FireIcon, LikeIcon } from '@/shared/ui/icons';
import { useSidebarVariants } from '../../hooks/useSidebarVariants';

const SidebarVariants = () => {
  const { selectVariantHandler, isActive } = useSidebarVariants();

  return (
    <SidebarElement title="Выборки">
      <ul>
        <li className={isActive('basic')} onClick={() => selectVariantHandler('basic')}>
          <BooksIcon /> Все
        </li>
        <li className={isActive('liked')} onClick={() => selectVariantHandler('liked')}>
          <LikeIcon /> Понравившиеся
        </li>
        <li className={isActive('bookmarks')} onClick={() => selectVariantHandler('bookmarks')}>
          <BookmarkIcon /> В закладках
        </li>
        <li className={isActive('popular')} onClick={() => selectVariantHandler('popular')}>
          <FireIcon /> Популярные
        </li>
        <li className={isActive('new')} onClick={() => selectVariantHandler('new')}>
          <ClipboardIcon /> Новые
        </li>
      </ul>
    </SidebarElement>
  );
};

export default SidebarVariants;
