import Head from 'next/head';
import { NotFoundedCard } from '@/widgets/NotFoundedCard';

const NotFounded = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Ошибка</title>
      </Head>
      <NotFoundedCard />
    </>
  );
};

export default NotFounded;
