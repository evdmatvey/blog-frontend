import Input from '@/shared/ui/Input';
import styles from './SettingsCard.module.scss';
import Button from '@/shared/ui/Button';
import { LogoutIcon, UpdateIcon } from '@/shared/ui/icons';
import PasswordInput from '@/shared/ui/PasswordInput';

const SettingsCard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3>Информация</h3>
          <form className={styles.form}>
            <Input placeholder="Email..." />
            <Input placeholder="Обо мне..." />
            <div>
              <Button color="base" size="short" type="common" withIcon outlined>
                <UpdateIcon />
                Обновить
              </Button>
            </div>
          </form>
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
            <PasswordInput placeholder="Email..." />
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
