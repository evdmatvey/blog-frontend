import Link from 'next/link';
import { LogoIcon } from '@/ui/icons';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={styles.root} href="/">
      <LogoIcon width={40} height={40} color={'white'} /> evd.matvey
    </Link>
  );
};

export default Logo;
