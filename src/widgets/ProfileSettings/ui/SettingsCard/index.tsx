import { UpdateDataForm } from '@/features/UpdateUserData';
import { UpdatePasswordForm } from '@/features/UpdateUserPassword';
import { UpdateUserAvatar } from '@/features/UpdateUserAvatar';
import { selectUser } from '@/entities/User';
import { useAppSelector } from '@/shared/hooks/redux';
import { LogoutIcon } from '@/shared/ui/icons';
import Button from '@/shared/ui/Button';

import styles from './SettingsCard.module.scss';
import Image from 'next/image';

const SettingsCard = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className={styles.root}>
      {user && (
        <Image
          width={60}
          height={60}
          src={process.env.NEXT_PUBLIC_API_URI + user.avatar}
          alt="аватар пользователя"
          className={styles.avatar}
          unoptimized
          loading="lazy"
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3>Информация</h3>
          <UpdateDataForm />
        </div>
        <div className={styles.item}>
          <h3>Аватар</h3>
          <div className={styles.elem}>
            <UpdateUserAvatar />
          </div>
        </div>
        <div className={styles.item}>
          <h3>Пароль</h3>
          <UpdatePasswordForm />
        </div>
        <div className={styles.item}>
          <h3>Удалить аккаунт</h3>
          <Button color="gray" size="medium" type="common" outlined withIcon>
            <LogoutIcon /> Удалить аккаунт
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
