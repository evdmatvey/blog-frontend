import { FC, ReactNode, RefObject } from 'react';

import styles from './SidebarDropdown.module.scss';
import { ArrowDownIcon } from '@/shared/ui/icons';

interface SidebarDropdownProps {
  title: string;
  children: ReactNode[] | ReactNode;
  open: boolean;
  listRef: RefObject<HTMLDivElement>;
  openPopupHandler: () => void;
  isOpen: boolean;
}

const SidebarDropdown: FC<SidebarDropdownProps> = ({
  children,
  title,
  open,
  listRef,
  openPopupHandler,
  isOpen,
}) => {
  return (
    <div ref={listRef} className={styles.root}>
      <div onClick={openPopupHandler} className={`${styles.title} ${isOpen ? styles.open : ''}`}>
        {title}
        <ArrowDownIcon />
      </div>
      {open && <ul className={styles.list}>{children}</ul>}
    </div>
  );
};

export default SidebarDropdown;
