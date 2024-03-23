import { GetServerSideProps } from 'next';
import axios from 'axios';
import { wrapper } from '@/app/redux/store';
import { PostData } from '@/entities/Post';
import { setUser } from '@/entities/User';
import * as Api from '../api';

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
    const posts: PostData[] = (await Api.getNewPosts(6)).posts;

    return {
      props: { posts },
    };
  },
);

export default getServerSideProps;
