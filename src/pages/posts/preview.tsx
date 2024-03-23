import Head from 'next/head';
import { PostPreviewCard } from '@/widgets/PostPreviewCard';
import getServerSideProps from '@/shared/utils/getProps/getProps';

const PostPreview = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Предпросмотр статьи</title>
      </Head>
      <PostPreviewCard />
    </>
  );
};

export default PostPreview;

export { getServerSideProps };
