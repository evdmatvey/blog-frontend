import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { selectUser, setUser } from '@/entities/User';
import { UpdateIcon } from '@/shared/ui/icons';
import Input from '@/shared/ui/Input';
import Button from '@/shared/ui/Button';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { UpdateDataDTO } from '../../api/dto/updateData.dto';
import * as Api from '../../api';

import styles from './UpdateDataForm.module.scss';

const UpdateDataForm = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UpdateDataDTO>({
    defaultValues: {
      desc: user?.desc,
      email: user?.email,
    },
  });

  const updateUserDataHandler = async (data: UpdateDataDTO) => {
    if (user) {
      try {
        const updatedUser = await Api.updateData({ ...data, avatar: user.avatar });
        dispatch(setUser(updatedUser));
        toast.success('Вы успешно обновили свои данные!');
      } catch (error) {
        if (error instanceof AxiosError) {
          setError('email', { message: error.response?.data.message }, { shouldFocus: true });
        }
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(updateUserDataHandler)}>
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
      <Input
        placeholder="Обо мне..."
        register={{
          ...register('desc'),
        }}
      />
      <div>
        <Button color="base" size="short" type="common" withIcon outlined>
          <UpdateIcon />
          {isSubmitting ? 'Обновляется' : 'Обновить'}
        </Button>
      </div>
    </form>
  );
};

export default UpdateDataForm;
