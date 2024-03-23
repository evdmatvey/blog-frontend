import Link from 'next/link';
import { useActiveLink } from './hooks/useActiveLink';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link className={useActiveLink('/')} href="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className={useActiveLink('/posts')} href="/posts">
            Статьи
          </Link>
        </li>
        <li>
          <Link className={useActiveLink('/about')} href="/">
            Обо мне
          </Link>
        </li>
        <li>
          <Link className={useActiveLink('/authors')} href="/">
            Авторы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
