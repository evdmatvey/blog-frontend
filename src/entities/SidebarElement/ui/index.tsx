import { FC, ReactNode } from 'react';

import styles from './SidebarElement.module.scss';

interface SidebarElementProps {
  children: ReactNode;
  title: string;
}

const SidebarElement: FC<SidebarElementProps> = ({ children, title }) => {
  return (
    <div className={styles.root}>
      <h3>{title}</h3>
      <div className={styles.list}>{children}</div>
    </div>
  );
};

export default SidebarElement;
