import { FC, ReactNode } from 'react';
import ProfileSidebar from '../ProfileSidebar';
import PageTitle from '@/components/PageTitle';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/redux/slices/user.slice';

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
