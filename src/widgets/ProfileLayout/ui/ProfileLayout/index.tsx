import { FC, ReactNode } from 'react';
import ProfileSidebar from '../ProfileSidebar';
import { selectUser } from '@/entities/User';
import PageTitle from '@/shared/ui/PageTitle';
import { useAppSelector } from '@/shared/hooks';

import styles from './ProfileLayout.module.scss';

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  const user = useAppSelector(selectUser);

  return (
    <div className={styles.root}>
      <PageTitle text={`Профиль | ${user?.nickname}`} />
      <div className={styles.wrapper}>
        <ProfileSidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
