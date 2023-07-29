import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { selectUser, setUser } from '@/entities/User';
import { SubmitButton } from '@/entities/SubmitButton';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import PasswordInput from '@/shared/ui/PasswordInput';
import { UpdatePasswordDTO } from '../../api/dto/updatePassword.dto';
import * as Api from '../../api';

import styles from './UpdatePasswordForm.module.scss';

const UpdatePasswordForm = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UpdatePasswordDTO>();

  const updateUserPasswordHandler = async (data: UpdatePasswordDTO) => {
    try {
      const updatedUser = await Api.updatePassword({ ...data });
      dispatch(setUser(updatedUser));
      toast.success('Вы успешно обновили свой пароль!');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('password', { message: error.response?.data.message }, { shouldFocus: true });
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(updateUserPasswordHandler)}>
      <PasswordInput
        placeholder="Новый пароль..."
        errorMessage={errors.password?.message}
        register={{
          ...register('password', {
            required: 'Укажите пароль',
            maxLength: { value: 24, message: 'Пароль должен быть не более 24 симболов' },
            minLength: { value: 6, message: 'Пароль должен быть более 6 симболов' },
            validate: (password: string) => {
              if (!password.trim()) {
                return 'Укажите корректный пароль';
              } else if (password.trim() === user?.password) {
                return 'Укажите новый пароль';
              }
            },
          }),
        }}
      />
      <div>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
