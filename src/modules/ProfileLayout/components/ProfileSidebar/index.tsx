import { useRouter } from 'next/router';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import { removeUser, selectUser } from '@/redux/slices/user.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { GuardIcon, LogoutIcon, SettingsIcon, StatisticsIcon, UserInfoIcon } from '@/ui/icons';
import Button from '@/ui/Button';

import styles from './ProfileSidebar.module.scss';

const ProfileSidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const logout = () => {
    dispatch(removeUser());
    destroyCookie(undefined, '_token');
    toast.warning('Вы вышли из аккаунта');
    router.push('/');
  };

  return (
    <aside className={styles.root}>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/profile" className={router.pathname === '/profile' ? styles.active : ''}>
              <UserInfoIcon /> Информация
            </Link>
          </li>
          <li>
            <Link
              href="/profile/settings"
              className={router.pathname === '/profile/settings' ? styles.active : ''}>
              <SettingsIcon /> Настройки
            </Link>
          </li>
          <li>
            <Link href="/" className={router.pathname === '/profile/my-posts' ? styles.active : ''}>
              <StatisticsIcon /> Мои статьи
            </Link>
          </li>
          {user?.role === 'admin' && (
            <li>
              <Link href="/" className={router.pathname === '/profile/apanel' ? styles.active : ''}>
                <GuardIcon /> Админ-панель
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Button color="base" size="medium" type="common" withIcon outlined onClick={logout}>
        <LogoutIcon /> Выйти
      </Button>
    </aside>
  );
};

export default ProfileSidebar;
