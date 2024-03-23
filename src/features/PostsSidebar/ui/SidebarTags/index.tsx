import { SidebarElement, activeClass } from '@/entities/SidebarElement';
import { useSidebarTags } from '../../hooks/useSidebarTags';

const SidebarTags = () => {
  const { popularTags, selectTagHandler, tagId, isActive } = useSidebarTags();
  return (
    <SidebarElement title="Популярные тэги">
      <ul>
        {popularTags.map((tag) => (
          <li className={isActive(tag._id)} onClick={() => selectTagHandler(tag._id)} key={tag._id}>
            {tag.title}
          </li>
        ))}
      </ul>
    </SidebarElement>
  );
};

export default SidebarTags;
