import { ProfileLayout } from '@/modules/ProfileLayout';
import getServerSideProps from '@/core/getProps/getPropsWithAuthCheck';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Профиль</title>
      </Head>
      <ProfileLayout>Профиль</ProfileLayout>
    </>
  );
};

export default Profile;

export { getServerSideProps };
