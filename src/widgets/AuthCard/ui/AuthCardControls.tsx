import Button from '@/shared/ui/Button';
import { LoginIcon, RegistrationIcon } from '@/shared/ui/icons';
import { AuthVariants } from './AuthCard';
import { FC } from 'react';

interface AuthCardControlsProps {
  flag: boolean;
  authType: AuthVariants;
  setLogin: () => void;
  setRegistration: () => void;
}

const AuthCardControls: FC<AuthCardControlsProps> = ({
  authType,
  flag,
  setLogin,
  setRegistration,
}) => {
  return (
    <>
      {flag ? (
        <>
          <Button
            color="black"
            size="short"
            type="common"
            withIcon
            actualState={authType === 'login'}
            onClick={setLogin}>
            <LoginIcon />
            Вход
          </Button>
          <Button
            color="black"
            size="short"
            type="common"
            withIcon
            actualState={authType === 'registration'}
            onClick={setRegistration}>
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
            onClick={setLogin}>
            <LoginIcon />
            Вход
          </Button>
          <Button
            color="black"
            size="long"
            type="common"
            withIcon
            actualState={authType === 'registration'}
            onClick={setRegistration}>
            <RegistrationIcon />
            Регистрация
          </Button>
        </>
      )}
    </>
  );
};

export default AuthCardControls;
