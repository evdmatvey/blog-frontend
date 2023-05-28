import Navbar from '@/components/Navbar';
import Logo from '@/ui/Logo';
import Button from '@/ui/Button';
import { HelpIcon } from '@/ui/icons';
import Container from '@/ui/Container';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Logo />
            <Navbar />
          </div>
          <div className={styles.right}>
            <div className={styles.copyright}>Разработано evd.matvey, © 2022</div>
            <Button color="base" size="medium" type="common" outlined withIcon>
              <HelpIcon /> Обратная связь
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
