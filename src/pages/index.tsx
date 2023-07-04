import Head from 'next/head';
import getServerSideProps from '@/shared/utils/getProps/getProps';

export default function Home() {
  return (
    <>
      <Head>
        <title>evd.matvey - Главная</title>
      </Head>
    </>
  );
}

export { getServerSideProps };
