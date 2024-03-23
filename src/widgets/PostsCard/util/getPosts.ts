import { GetServerSideProps } from 'next';
import axios from 'axios';
import { wrapper } from '@/app/redux/store';
import { PostApi, setPosts } from '@/entities/Post';
import { setUser } from '@/entities/User';
import { TagApi, TagData, setPopularTags } from '@/entities/Tag';
import { Author, AuthorsApi, setPopularAuthors } from '@/entities/Author';

const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${ctx.req.cookies._token}`,
        },
      });

      store.dispatch(setUser(data));
    } catch (error) {}
    const { posts, currentPage, limit, pages } = await PostApi.getPosts('basic', 1, 6, '', '');
    const tags: TagData[] = await TagApi.getPopularTags();
    const authors: Author[] = await AuthorsApi.getPopularAuthors();

    store.dispatch(setPosts({ posts, limit, pages, page: currentPage }));
    store.dispatch(setPopularTags(tags));
    store.dispatch(setPopularAuthors(authors));

    return {
      props: {},
    };
  },
);

export default getServerSideProps;
