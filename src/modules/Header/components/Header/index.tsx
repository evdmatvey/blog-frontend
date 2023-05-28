import { ChangeTheme } from '@/modules/ChangeTheme';
import LoginButton from '@/components/LoginButton';
import Navbar from '@/components/Navbar';
import Logo from '@/ui/Logo';
import Container from '@/ui/Container';

import styles from './Header.module.scss';

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
