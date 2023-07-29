import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { selectUser } from '@/entities/User';
import { useGetWindowSize, useAppSelector } from '@/shared/hooks';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';
import AuthCardControls from '../AuthCardControls';

import styles from './AuthCard.module.scss';

export type AuthVariants = 'login' | 'registration';

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
          <AuthCardControls
            authType={authType}
            flag={isWidth}
            setLogin={setLoginAuthType}
            setRegistration={setRegistrationAuthType}
          />
        </div>
        {authType === 'login' ? <LoginForm /> : <RegistrationForm />}
      </div>
    </>
  );
};

export default Auth;
