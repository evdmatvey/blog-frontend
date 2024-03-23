import React, { useRef } from 'react';
import { GetPostsVariants } from '@/entities/Post';
import { usePopup } from '@/shared/hooks';
import { useSidebarVariants } from '../../hooks/useSidebarVariants';
import SidebarDropdown from '../SidebarDropdown';

const SidebarVariantsDropdown = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const { open, openPopupHandler } = usePopup(listRef);

  const { selectVariantHandler, variant, isActive } = useSidebarVariants();

  const variants = {
    basic: 'Все',
    liked: 'Понравившиеся',
    bookmarks: 'В закладках',
    popular: 'Популярные',
    new: 'Новые',
  };

  const title = variant !== 'filter' && variant ? variants[variant] : 'Выборки';

  const clickVariantHandler = (newVariant: GetPostsVariants) => {
    openPopupHandler();
    selectVariantHandler(newVariant);
  };

  return (
    <SidebarDropdown
      listRef={listRef}
      open={open}
      title={title}
      openPopupHandler={openPopupHandler}
      isOpen={open}>
      <li className={isActive('basic')} onClick={() => clickVariantHandler('basic')}>
        {variants.basic}
      </li>
      <li className={isActive('liked')} onClick={() => clickVariantHandler('liked')}>
        {variants.liked}
      </li>
      <li className={isActive('bookmarks')} onClick={() => clickVariantHandler('bookmarks')}>
        {variants.bookmarks}
      </li>
      <li className={isActive('popular')} onClick={() => clickVariantHandler('popular')}>
        {variants.popular}
      </li>
      <li className={isActive('new')} onClick={() => clickVariantHandler('new')}>
        {variants.new}
      </li>
    </SidebarDropdown>
  );
};

export default SidebarVariantsDropdown;
