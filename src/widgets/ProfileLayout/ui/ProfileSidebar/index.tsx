import { useRouter } from 'next/router';
import Link from 'next/link';
import { selectUser } from '@/entities/User';
import { LogoutButton } from '@/entities/LogoutButton';
import { useAppSelector } from '@/shared/hooks/redux';
import { GuardIcon, SettingsIcon, StatisticsIcon, UserInfoIcon } from '@/shared/ui/icons';

import styles from './ProfileSidebar.module.scss';

const ProfileSidebar = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);

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
      <LogoutButton />
    </aside>
  );
};

export default ProfileSidebar;
