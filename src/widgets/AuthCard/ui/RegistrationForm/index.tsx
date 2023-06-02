import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { setCookie } from 'nookies';
import { toast } from 'react-toastify';
import * as Api from '../../api/auth';
import { RegistrationFromDTO } from '../../api/dto/auth.dto';
import Input from '@/shared/ui/Input';
import Button from '@/shared/ui/Button';
import PasswordInput from '@/shared/ui/PasswordInput';

import styles from './RegistrationForm.module.scss';

type RegistrationFormProps = RegistrationFromDTO & { passwordConfirmation: string };

const RegistrationForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormProps>();

  const registrationHandler = async (data: Omit<RegistrationFormProps, 'passwordConfirmation'>) => {
    try {
      const { token } = await Api.register(data);
      setCookie(null, '_token', token, { path: '/' });
      toast.success('Вы успешно зарегистрировались!');
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('email', error.response?.data.message);
      }
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(registrationHandler)}>
      <Input
        errorMessage={errors.email?.message}
        placeholder="Email..."
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
      <Input
        errorMessage={errors.nickname?.message}
        placeholder="Nickname..."
        register={{
          ...register('nickname', {
            required: 'Укажите nickname',
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
          }),
        }}
      />
      <PasswordInput
        placeholder="Повторите пароль..."
        errorMessage={errors.passwordConfirmation?.message}
        register={{
          ...register('passwordConfirmation', {
            required: 'Укажите пароль повторно',
            maxLength: { value: 24, message: 'Пароль должен быть не более 24 симболов' },
            minLength: { value: 6, message: 'Пароль должен быть более 6 симболов' },
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'Пароли не совпадают';
              },
            },
          }),
        }}
      />
      <Button color="base" size="longest" type="common" outlined>
        {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
};

export default RegistrationForm;
