import React, { useRef } from 'react';
import { usePopup } from '@/shared/hooks';
import { useSidebarAuthors } from '../../hooks/useSidebarAuthors';
import SidebarDropdown from '../SidebarDropdown';

const SidebarAuthorsDropdown = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const { open, openPopupHandler } = usePopup(listRef);

  const { isActive, popularAuthors, selectAuthorHandler, authorId } = useSidebarAuthors();

  const title = authorId
    ? popularAuthors.find((author) => author._id == authorId)?.nickname || 'Популярные авторы'
    : 'Популярные авторы';

  const clickAuthorHandler = (newAuthorId: string) => {
    openPopupHandler();
    selectAuthorHandler(newAuthorId);
  };

  return (
    <SidebarDropdown
      listRef={listRef}
      open={open}
      title={title}
      openPopupHandler={openPopupHandler}
      isOpen={open}>
      {popularAuthors.map((author) => (
        <li
          key={author._id}
          className={isActive(author._id)}
          onClick={() => clickAuthorHandler(author._id)}>
          {author.nickname}
        </li>
      ))}
    </SidebarDropdown>
  );
};

export default SidebarAuthorsDropdown;
