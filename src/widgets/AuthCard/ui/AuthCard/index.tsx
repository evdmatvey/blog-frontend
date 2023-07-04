import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { selectUser } from '@/entities/User';
import { useGetWindowSize } from '@/shared/hooks/useGetWindowSize';
import { useAppSelector } from '@/shared/hooks/redux';
import { LoginIcon, RegistrationIcon } from '@/shared/ui/icons';
import Button from '@/shared/ui/Button';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';

import styles from './AuthCard.module.scss';

type AuthVariants = 'login' | 'registration';

const Auth = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);
  const [authType, setAuthType] = useState<AuthVariants>('login');

  const { width } = useGetWindowSize();

  const setLoginAuthType = () => setAuthType('login');
  const setRegistrationAuthType = () => setAuthType('registration');

  const pageTitle = authType === 'login' ? 'Авторизация' : 'Регистация';
  const isWidth = width ? width < 758 : false;

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Head>
        <title>evd.matvey - {pageTitle}</title>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.controller}>
          {isWidth ? (
            <>
              <Button
                color="black"
                size="short"
                type="common"
                withIcon
                actualState={authType === 'login'}
                onClick={setLoginAuthType}>
                <LoginIcon />
                Вход
              </Button>
              <Button
                color="black"
                size="short"
                type="common"
                withIcon
                actualState={authType === 'registration'}
                onClick={setRegistrationAuthType}>
                <RegistrationIcon />
                Регистрация
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        {authType === 'login' ? <LoginForm /> : <RegistrationForm />}
      </div>
    </>
  );
};

export default Auth;
