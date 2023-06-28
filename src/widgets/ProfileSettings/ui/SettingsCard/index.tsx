import { UpdateDataForm } from '@/features/UpdateUserData';
import { LogoutIcon, UpdateIcon } from '@/shared/ui/icons';
import Button from '@/shared/ui/Button';
import PasswordInput from '@/shared/ui/PasswordInput';

import styles from './SettingsCard.module.scss';

const SettingsCard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3>Информация</h3>
          <UpdateDataForm />
        </div>
        <div className={styles.item}>
          <h3>Аватар</h3>
          <div className={styles.elem}>
            <div>
              <Button color="base" size="short" type="common" withIcon outlined>
                <UpdateIcon />
                Обновить
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <h3>Пароль</h3>
          <form className={styles.form}>
            <PasswordInput placeholder="Новый пароль..." />
            <div>
              <Button color="base" size="short" type="common" withIcon outlined>
                <UpdateIcon />
                Обновить
              </Button>
            </div>
          </form>
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
