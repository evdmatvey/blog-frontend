import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import Link from 'next/link';
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link className={router.pathname === '/' ? styles.active : ''} href="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className={router.pathname === '/posts' ? styles.active : ''} href="/">
            Статьи
          </Link>
        </li>
        <li>
          <Link className={router.pathname === '/about' ? styles.active : ''} href="/">
            Обо мне
          </Link>
        </li>
        <li>
          <Link className={router.pathname === '/authors' ? styles.active : ''} href="/">
            Авторы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
