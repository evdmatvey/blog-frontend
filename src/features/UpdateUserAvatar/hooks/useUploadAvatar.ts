import { useState } from 'react';
import { toast } from 'react-toastify';
import { selectUser, setUser } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { UpdateUserAvatarDTO } from '../api/dto/UpdateAvatar.dto';
import * as Api from '../api';

interface UploadAvatarResponse {
  avatarUrl: string;
  isSubmitted: boolean;
  cancelUpdateUserAvatarHandler: () => void;
  imageSubmitHandler: () => void;
  prepareAvatarDataHandler: () => void;
  setAvatarUrlHandler: (v: string) => void;
}

export const useUploadAvatar = (): UploadAvatarResponse => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const updateUserAvatarHandler = async (dto: UpdateUserAvatarDTO) => {
    try {
      const updatedUser = await Api.updateAvatar(dto);
      dispatch(setUser(updatedUser));
    } catch (error) {
      toast.error('Ошибка при обновлении аватара');
    }
  };

  const prepareAvatarDataHandler = async () => {
    if (!avatarUrl) {
      toast.error('Ошибка при загрузке аватара');
    } else if (user) {
      const updatedUserData: UpdateUserAvatarDTO = {
        email: user.email,
        desc: user.desc,
        avatar: avatarUrl,
      };
      updateUserAvatarHandler(updatedUserData).finally(() => setIsSubmitted(false));
    }
  };

  const imageSubmitHandler = () => {
    setAvatarUrl('');
    setIsSubmitted(true);
  };

  const cancelUpdateUserAvatarHandler = () => {
    setIsSubmitted(false);
    setAvatarUrl('');
  };

  return {
    avatarUrl,
    isSubmitted,
    cancelUpdateUserAvatarHandler,
    imageSubmitHandler,
    prepareAvatarDataHandler,
    setAvatarUrlHandler: (url: string) => setAvatarUrl(url),
  };
};
