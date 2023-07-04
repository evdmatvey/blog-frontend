import LoginButton from '@/features/LoginButton';
import Navbar from '@/features/Navbar';
import Logo from '@/shared/ui/Logo';
import Container from '@/shared/ui/Container';

import styles from './Header.module.scss';
import { ChangeTheme } from '@/features/ChangeTheme';

const Header = () => {
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
            <LoginButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
