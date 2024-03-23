import { useRef } from 'react';
import { usePopup } from '@/shared/hooks';
import { useSidebarTags } from '../../hooks/useSidebarTags';
import SidebarDropdown from '../SidebarDropdown';

const SidebarTagsDropdown = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const { open, openPopupHandler } = usePopup(listRef);

  const { isActive, popularTags, selectTagHandler, tagId } = useSidebarTags();

  const title = tagId
    ? popularTags.find((tag) => tag._id == tagId)?.title || 'Популярные теги'
    : 'Популярные теги';

  const clickTagHandler = (newTagId: string) => {
    openPopupHandler();
    selectTagHandler(newTagId);
  };

  return (
    <SidebarDropdown
      listRef={listRef}
      open={open}
      title={title}
      openPopupHandler={openPopupHandler}
      isOpen={open}>
      {popularTags.map((tag) => (
        <li key={tag._id} className={isActive(tag._id)} onClick={() => clickTagHandler(tag._id)}>
          {tag.title}
        </li>
      ))}
    </SidebarDropdown>
  );
};

export default SidebarTagsDropdown;
