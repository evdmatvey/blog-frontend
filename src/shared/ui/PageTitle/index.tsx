import { FC } from 'react';

import styles from './PageTitle.module.scss';

interface PageTitleProps {
  text: string;
}

const PageTitle: FC<PageTitleProps> = ({ text }) => {
  return <h1 className={styles.root}>{text}</h1>;
};

export default PageTitle;
