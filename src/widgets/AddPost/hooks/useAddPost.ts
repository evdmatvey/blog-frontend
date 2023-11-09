import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { clearImages } from '@/features/AddContentImages';
import {
  removePostData,
  selectPostDesc,
  selectPostImage,
  selectPostTags,
  selectPostText,
  selectPostTitle,
  setPostText,
} from '@/entities/Post';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import * as Api from '../api';

export const useAddPost = () => {
  const dispatch = useAppDispatch();

  const text = useAppSelector(selectPostText);
  const title = useAppSelector(selectPostTitle);
  const desc = useAppSelector(selectPostDesc);
  const image = useAppSelector(selectPostImage);
  const tags = useAppSelector(selectPostTags);

  const setTextHandler = (text: string) => dispatch(setPostText(text));

  const sendPostHandler = async () => {
    if (tags && title && text && image && desc) {
      // TODO: Then create a redirect to the post preview page.
      const post = await Api.createPost({
        title,
        text,
        desc,
        image,
        tags: tags?.map((tag) => tag._id),
      })
        .then(() => {
          dispatch(removePostData());
          dispatch(clearImages());
          toast.success('Ваша статья отправлена на рассмотрение!');
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            toast.error(err.response?.data.message);
          }
        });
    } else {
      toast.error('Чтобы создать статью, вам необходимо заполнить все поля!');
    }
  };

  return { text, setTextHandler, sendPostHandler };
};
