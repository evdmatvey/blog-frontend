import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import * as Api from '../../api/auth';
import { LoginFormDTO } from '../../api/dto/auth.dto';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import PasswordInput from '@/ui/PasswordInput';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormDTO>();

  const loginHandler = async (data: LoginFormDTO) => {
    try {
      const { token } = await Api.login(data);
      setCookie(null, '_token', token, { path: '/' });
      toast.success('Вы успешно вошли в аккаунт!');
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('email', error.response?.data.message);
      }
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(loginHandler)}>
      <Input
        placeholder="Email..."
        errorMessage={errors.email?.message}
        register={{
          ...register('email', {
            required: 'Укажите email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Укажие корректный email',
            },
          }),
        }}
      />
      <PasswordInput
        placeholder="Пароль..."
        errorMessage={errors.password?.message}
        register={{
          ...register('password', {
            required: 'Укажите пароль',
            maxLength: { value: 24, message: 'Пароль должен быть не более 24 симболов' },
            minLength: { value: 6, message: 'Пароль должен быть более 6 симболов' },
            validate: (password: string) => {
              if (!password.trim()) {
                return 'Укажите корректный пароль';
              }
            },
          }),
        }}
      />
      <Button color="base" size="longest" type="common" outlined>
        {isSubmitting ? 'Воход...' : 'Войти'}
      </Button>
    </form>
  );
};

export default LoginForm;
