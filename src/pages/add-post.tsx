import Head from 'next/head';
import { AddPostCard, getServerSideProps } from '@/widgets/AddPost';

const AddPost = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Создание статьи</title>
      </Head>
      <AddPostCard />
    </>
  );
};

export default AddPost;

export { getServerSideProps };
