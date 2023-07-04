import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import { removeUser } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/redux';
import Button from '@/shared/ui/Button';
import { LogoutIcon } from '@/shared/ui/icons';

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = () => {
    dispatch(removeUser());
    destroyCookie(undefined, '_token');
    toast.warning('Вы вышли из аккаунта');
    router.push('/');
  };

  return (
    <Button color="base" size="medium" type="common" withIcon outlined onClick={logout}>
      <LogoutIcon /> Выйти
    </Button>
  );
};

export default LogoutButton;
