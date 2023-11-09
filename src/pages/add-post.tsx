import Head from 'next/head';
import { AddPostCard } from '@/widgets/AddPost';
import getServerSideProps from '@/shared/utils/getProps/getProps';

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
