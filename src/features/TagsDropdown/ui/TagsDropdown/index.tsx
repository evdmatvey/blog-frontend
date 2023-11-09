import { TagsSearch } from '@/features/TagsSearch';
import { TagData, TextedTag } from '@/entities/Tag';
import { usePopup } from '@/shared/hooks';
import Button from '@/shared/ui/Button';
import { useTagDropdown } from '../../hooks/useTagDropdown';

import styles from './TagsDropdown.module.scss';

const TagsDropdown = () => {
  const { creatingPermission, listRef, tags, addTagToSelected, setFoundTags, createTagHandler } =
    useTagDropdown();

  const { open, openPopupHandler } = usePopup(listRef);

  const selectTagHandler = (tag: TagData) => {
    addTagToSelected(tag);
    if (open) openPopupHandler();
  };

  const onCreatingTag = () => {
    createTagHandler();
    if (open) openPopupHandler();
  };

  return (
    <div ref={listRef} className={styles.root}>
      <div className={styles.wrapper}>
        <TagsSearch setTags={setFoundTags} onFocus={openPopupHandler} />
        {creatingPermission && (
          <Button color="base" size="short" type="common" outlined onClick={onCreatingTag}>
            Создать
          </Button>
        )}
      </div>
      {!!tags.length && open && (
        <ul className={styles.list}>
          {tags.map((tag) => (
            <li key={tag._id} onClick={() => selectTagHandler(tag)}>
              <TextedTag tag={tag} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsDropdown;
