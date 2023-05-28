import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';
import { selectUser } from '@/redux/slices/user.slice';
import { useAppSelector } from '@/hooks/redux';
import Button from '@/ui/Button';
import { LoginIcon, RegistrationIcon } from '@/ui/icons';

import styles from './AuthCard.module.scss';

type AuthVariants = 'login' | 'registration';

const Auth = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);
  const [authType, setAuthType] = useState<AuthVariants>('login');

  const setLoginAuthType = () => setAuthType('login');
  const setRegistrationAuthType = () => setAuthType('registration');

  const pageTitle = authType === 'login' ? 'Авторизация' : 'Регистация';

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.controller}>
          <Button
            color="black"
            size="long"
            type="common"
            withIcon
            actualState={authType === 'login'}
            onClick={setLoginAuthType}>
            <LoginIcon />
            Вход
          </Button>
          <Button
            color="black"
            size="long"
            type="common"
            withIcon
            actualState={authType === 'registration'}
            onClick={setRegistrationAuthType}>
            <RegistrationIcon />
            Регистрация
          </Button>
        </div>
        {authType === 'login' ? <LoginForm /> : <RegistrationForm />}
      </div>
    </>
  );
};

export default Auth;