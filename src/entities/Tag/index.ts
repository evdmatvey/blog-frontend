import Tag from './ui/Tag';
import TextedTag from './ui/TextedTag';
import { useCreateTag } from './hooks/useCreateTag';

export * from './model/store/tag.slice';
export * from './model/types/TagData';
export * as TagApi from './api';

export { Tag, TextedTag, useCreateTag };
