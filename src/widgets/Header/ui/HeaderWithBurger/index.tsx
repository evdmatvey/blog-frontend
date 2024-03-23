import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LoginButton from '@/features/LoginButton';
import { ChangeTheme, ChangeThemeController } from '@/features/ChangeTheme';
import { selectUser } from '@/entities/User';
import { useAppSelector } from '@/shared/hooks';
import { CloseIcon, UserIcon, BurgerIcon } from '@/shared/ui/icons';
import Logo from '@/shared/ui/Logo';
import Container from '@/shared/ui/Container';
import Button from '@/shared/ui/Button';

import styles from './HeaderWithBurger.module.scss';

const HeaderWithBurger = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);

  const [isMenuOpen, openMenu] = useState<boolean>(false);

  const openMenuHandler = () => openMenu((prev) => !prev);

  useEffect(() => {
    if (document) {
      new ChangeThemeController(document.querySelector('html') as HTMLHtmlElement);
    }
  }, []);

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <button className={styles.burger} onClick={openMenuHandler}>
            <BurgerIcon width={40} height={40} />
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div className={styles.menu}>
          <nav>
            <ul>
              <li>
                <Link className={router.pathname === '/' ? styles.active : ''} href="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={router.pathname === '/posts' ? styles.active : ''} href="/posts">
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
          <div className={styles.buttons}>
            {!user ? (
              <LoginButton onClick={openMenuHandler} />
            ) : (
              <Link href="/profile" className={styles.profile}>
                <Button color="base" size="short" withIcon type="common" onClick={openMenuHandler}>
                  <UserIcon /> Профиль
                </Button>
              </Link>
            )}
            <ChangeTheme />
          </div>
          <button className={styles.close} onClick={openMenuHandler}>
            <CloseIcon width={30} height={30} />
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderWithBurger;
