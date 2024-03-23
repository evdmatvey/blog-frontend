import Head from 'next/head';
import { ProfileLayout } from '@/widgets/ProfileLayout';
import getServerSideProps from '@/shared/utils/getProps/getPropsWithAuthCheck';

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
