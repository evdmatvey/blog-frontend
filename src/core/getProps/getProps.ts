import { GetServerSideProps } from 'next';
import axios from 'axios';
import { wrapper } from '@/redux/store';
import { setUser } from '@/redux/slices/user.slice';

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

    return {
      props: {},
    };
  },
);

export default getServerSideProps;
