import { useRef } from 'react';
import Link from 'next/link';
import { selectUser } from '@/entities/User';
import { LogoutButton } from '@/entities/LogoutButton';
import { useAppSelector, usePopup } from '@/shared/hooks';
import Button from '@/shared/ui/Button';
import { UserIcon } from '@/shared/ui/icons';

import styles from './ProfilePopup.module.scss';

const ProfilePopup = () => {
  const user = useAppSelector(selectUser);

  const popupRef = useRef<HTMLDivElement>(null);
  const { open, openPopupHandler } = usePopup(popupRef);

  return (
    <div ref={popupRef}>
      <Button color="base" size="base" type="common" withIcon onClick={openPopupHandler}>
        <UserIcon />
        {user?.nickname}
      </Button>
      {open && (
        <div className={styles.popup}>
          <ul className={styles.menu}>
            <li>
              <Link href="/profile" onClick={openPopupHandler}>
                <UserIcon />
                Профиль
              </Link>
            </li>
          </ul>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
