import { useModal } from '@/shared/hooks';
import Button from '@/shared/ui/Button';
import Modal from '@/shared/ui/Modal';
import ImagesPopup from '../ImagesPopup';

import styles from './AddContentImages.module.scss';

const AddContentImages = () => {
  const { isOpen, openModalHandler, closeModalHandler } = useModal();

  return (
    <div className={styles.root}>
      <h3>Обложка и контентные картинки</h3>
      <p>
        Загрузите обложку, которая будет в карточке статьи и в самой статье. Также вы можете
        загрузить другие изображение, которые захотите вставить в статью, после загрузки вы сможете
        скопировать ссылку и использовать её. Если вы решите не использовать какую-либо картинку, то
        сможете её удалить
      </p>
      <Button color="base" size="medium" type="common" outlined onClick={openModalHandler}>
        Изображения
      </Button>
      {isOpen && (
        <Modal closeHandler={closeModalHandler}>
          <ImagesPopup />
        </Modal>
      )}
    </div>
  );
};

export default AddContentImages;
