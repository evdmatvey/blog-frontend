import { TagsDropdown } from '@/features/TagsDropdown';
import {
  removePostTag,
  selectPostDesc,
  selectPostTags,
  selectPostTitle,
  setPostDesc,
  setPostTitle,
} from '@/entities/Post';
import { Tag } from '@/entities/Tag';
import Input from '@/shared/ui/Input';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

import styles from './PostFields.module.scss';

const PostFields = () => {
  const dispatch = useAppDispatch();

  const selectedTags = useAppSelector(selectPostTags);
  const title = useAppSelector(selectPostTitle);
  const desc = useAppSelector(selectPostDesc);

  const setPostTitleHandler = (title: string) => dispatch(setPostTitle(title));
  const setPostDescHandler = (desc: string) => dispatch(setPostDesc(desc));

  return (
    <div className={styles.fields}>
      <p className={styles.desc}>
        Укажите название и описание статьи. Выберите тэги из предложенных или создайте новый
      </p>
      <Input placeholder="Название статьи..." onChange={setPostTitleHandler} defaultValue={title} />
      <Input placeholder="Описание статьи..." onChange={setPostDescHandler} defaultValue={desc} />
      <TagsDropdown />
      <div className={styles.tags}>
        {selectedTags?.map((tag) => (
          <Tag
            key={tag._id}
            tag={tag}
            onRemove={() => {
              dispatch(removePostTag(tag._id));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PostFields;
