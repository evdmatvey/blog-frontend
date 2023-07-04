import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { toast } from 'react-toastify';
import placeholder from '~/placeholder.jpg';
import { UploadButton } from '@/entities/UploadButton';
import { selectUser, setUser } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import Button from '@/shared/ui/Button';
import { CheckIcon, CloseIcon } from '@/shared/ui/icons';
import { UpdateUserAvatarDTO } from '../../api/dto/UpdateAvatar.dto';
import * as Api from '../../api';

import styles from './UpdateAvatar.module.scss';

const UpdateAvatar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const imageRef = useRef<null | HTMLDivElement>(null);

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
      updateUserAvatarHandler(updatedUserData)
        .then(() => {
          setIsSubmitted(false);
        })
        .catch(() => setIsSubmitted(false));
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

  return (
    <>
      <UploadButton setUrl={setAvatarUrl} onSubmit={imageSubmitHandler} />
      {isSubmitted && (
        <div className={styles.preview}>
          <div ref={imageRef}>
            {avatarUrl ? (
              <Image
                alt="превью аватара"
                width={60}
                height={60}
                className={styles.image}
                unoptimized
                placeholder="blur"
                blurDataURL={`data:image/jpeg;charset=utf-8,${placeholder}`}
                onLoad={() =>
                  confetti({
                    particleCount: 100,
                    startVelocity: 30,
                    spread: 360,
                    scalar: 0.7,
                    gravity: 1,
                  })
                }
                src={process.env.NEXT_PUBLIC_API_URI + avatarUrl}
              />
            ) : (
              <div className={styles.placeholder}>
                <div className={styles.loader}></div>
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            <Button
              color="gray"
              type="icon-only"
              size="long"
              outlined
              withIcon
              children={<CheckIcon />}
              onClick={prepareAvatarDataHandler}
            />
            <Button
              color="gray"
              type="icon-only"
              size="long"
              outlined
              withIcon
              children={<CloseIcon />}
              onClick={cancelUpdateUserAvatarHandler}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateAvatar;
