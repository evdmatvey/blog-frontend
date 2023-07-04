import LoginButton from '@/features/LoginButton';
import Navbar from '@/features/Navbar';
import { ChangeTheme } from '@/features/ChangeTheme';
import { selectUser } from '@/entities/User';
import Logo from '@/shared/ui/Logo';
import Container from '@/shared/ui/Container';
import { useAppSelector } from '@/shared/hooks/redux';

import styles from './Header.module.scss';
import { ProfilePopup } from '@/features/ProfilePopup';

const Header = () => {
  const user = useAppSelector(selectUser);

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Logo />
            <Navbar />
          </div>
          <div className={styles.right}>
            <ChangeTheme />
            {user ? <ProfilePopup /> : <LoginButton />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
