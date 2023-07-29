import { useRouter } from 'next/router';

import styles from '../Navbar.module.scss';

export const useActiveLink = (path: string) => {
  const router = useRouter();

  return router.pathname === path ? styles.active : '';
};
