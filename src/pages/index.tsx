import Head from 'next/head';
import getServerSideProps from '@/core/getProps/getProps';

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
