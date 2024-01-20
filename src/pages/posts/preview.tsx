import Head from 'next/head';
import getServerSideProps from '@/shared/utils/getProps/getProps';
import { PostPreviewCard } from '@/widgets/PostPreviewCard';

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
