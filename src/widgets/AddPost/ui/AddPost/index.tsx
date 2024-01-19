import dynamic from 'next/dynamic';
import { AddContentImages } from '@/features/AddContentImages';
import { GuardIcon, ViewIcon } from '@/shared/ui/icons';
import PageTitle from '@/shared/ui/PageTitle';
import Button from '@/shared/ui/Button';
import PostFields from '../PostFields';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import styles from './AddPost.module.scss';
import { useAddPost } from '../../hooks/useAddPost';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const AddPost = () => {
  const { text, sendPostHandler, setTextHandler, openPostPreviewHandler } = useAddPost();
  return (
    <>
      <PageTitle text="Создание статьи" />
      <div className={styles.wrapper}>
        <PostFields />
        <AddContentImages />
      </div>
      <div className={styles.textarea}>
        <MDEditor
          value={text}
          onChange={(newValue = '') => {
            setTextHandler(newValue);
          }}
        />
      </div>
      <div className={styles.buttons}>
        <Button
          color="gray"
          size="base"
          type="common"
          outlined
          withIcon
          onClick={openPostPreviewHandler}>
          <ViewIcon />
          Предпросмотр
        </Button>
        <Button color="base" size="base" type="common" outlined withIcon onClick={sendPostHandler}>
          <GuardIcon />
          Запрос на публикацию
        </Button>
      </div>
    </>
  );
};

export default AddPost;
