import Head from 'next/head';
import { FC } from 'react';
import { HomeCard, getServerSideProps } from '@/widgets/HomeCard';
import { PostData } from '@/entities/Post';

interface HomeProps {
  posts: PostData[];
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>evd.matvey - Главная</title>
      </Head>
      <HomeCard posts={posts} />
    </>
  );
};

export default Home;

export { getServerSideProps };
