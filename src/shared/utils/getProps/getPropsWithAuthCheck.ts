import { GetServerSideProps } from 'next';
import axios from 'axios';
import { wrapper } from '@/app/redux/store';
import { setUser } from '@/entities/User';

const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${ctx.req.cookies._token}`,
        },
      });

      store.dispatch(setUser(data));
    } catch (error) {
      ctx.res.setHeader('location', '/auth');
      ctx.res.statusCode = 302;
      ctx.res.end();
    }

    return {
      props: {},
    };
  },
);

export default getServerSideProps;
