import { UploadButton } from '@/entities/UploadButton';
import { useUploadAvatar } from '../../hooks/useUploadAvatar';
import PreviewImage from '../PreviewImage';
import PreviewControls from '../PreviewControls';

import styles from './UpdateAvatar.module.scss';

const UpdateAvatar = () => {
  const {
    avatarUrl,
    isSubmitted,
    cancelUpdateUserAvatarHandler,
    imageSubmitHandler,
    prepareAvatarDataHandler,
    setAvatarUrlHandler,
  } = useUploadAvatar();

  return (
    <>
      <UploadButton setUrl={setAvatarUrlHandler} onSubmit={imageSubmitHandler} />
      {isSubmitted && (
        <div className={styles.preview}>
          <div>
            <PreviewImage avatarUrl={avatarUrl} />
          </div>
          <PreviewControls
            cancelHandler={cancelUpdateUserAvatarHandler}
            prepareHandler={prepareAvatarDataHandler}
          />
        </div>
      )}
    </>
  );
};

export default UpdateAvatar;
