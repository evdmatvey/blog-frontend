import Image from 'next/image';
import { SidebarElement } from '@/entities/SidebarElement';
import { useSidebarAuthors } from '../../hooks/useSidebarAuthors';

const SidebarAuthors = () => {
  const { isActive, popularAuthors, selectAuthorHandler } = useSidebarAuthors();
  return (
    <SidebarElement title="Популярные авторы">
      <ul>
        {popularAuthors.map((author) => (
          <li
            className={isActive(author._id)}
            onClick={() => selectAuthorHandler(author._id)}
            key={author._id}>
            <Image
              width={30}
              height={30}
              unoptimized
              src={process.env.NEXT_PUBLIC_API_URI + author.avatar}
              alt={author.nickname}
            />
            {author.nickname}
          </li>
        ))}
      </ul>
    </SidebarElement>
  );
};

export default SidebarAuthors;
