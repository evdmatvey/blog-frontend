import Container from '@/ui/Container';
import getServerSideProps from '@/core/getProps/getProps';
import { AuthCard } from '@/modules/AuthCard';

import styles from '@/styles/Auth.module.scss';

const Auth = () => {
  return (
    <>
      <Container>
        <div className={styles.root}>
          <AuthCard />
        </div>
      </Container>
    </>
  );
};

export default Auth;

export { getServerSideProps };
