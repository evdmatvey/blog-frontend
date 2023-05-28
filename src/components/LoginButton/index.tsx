import Link from 'next/link';
import Button from '@/ui/Button';
import { UserIcon } from '@/ui/icons';
import { FC } from 'react';

interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton: FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <Link href="/auth">
      <Button color="base" size="base" type="common" withIcon onClick={onClick}>
        <UserIcon /> Войти
      </Button>
    </Link>
  );
};

export default LoginButton;
