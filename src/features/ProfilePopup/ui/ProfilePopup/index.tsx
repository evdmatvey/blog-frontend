import React, { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { removeUser, selectUser } from '@/entities/User';
import { LogoutButton } from '@/entities/LogoutButton';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import Button from '@/shared/ui/Button';

import styles from './ProfilePopup.module.scss';
import { UserIcon } from '@/shared/ui/icons';

const ProfilePopup = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const popupRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const openPopupHandler = () => setOpen((prev) => !prev);

  useEffect(() => {
    const closePopupHandler = (e: MouseEvent) => {
      if (popupRef.current && !e.composedPath().includes(popupRef.current as EventTarget)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', closePopupHandler);

    return () => document.body.removeEventListener('click', closePopupHandler);
  }, []);

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
