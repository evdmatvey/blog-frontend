import Head from 'next/head';
import { PostsCard, getServerSideProps } from '@/widgets/PostsCard';

const Posts = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Статьи</title>
      </Head>
      <PostsCard />
    </>
  );
};

export { getServerSideProps };

export default Posts;
