import { FC } from 'react';
import Link from 'next/link';
import Button from '@/shared/ui/Button';
import { UserIcon } from '@/shared/ui/icons';

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
