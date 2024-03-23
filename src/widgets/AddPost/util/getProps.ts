import { GetServerSideProps } from 'next';
import axios from 'axios';
import { wrapper } from '@/app/redux/store';
import { setUser } from '@/entities/User';
import { TagApi, setPopularTags } from '@/entities/Tag';

const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${ctx.req.cookies._token}`,
        },
      });

      const popularTags = await TagApi.getPopularTags();

      store.dispatch(setPopularTags(popularTags));
      store.dispatch(setUser(data));
    } catch (error) {}

    return {
      props: {},
    };
  },
);

export default getServerSideProps;
