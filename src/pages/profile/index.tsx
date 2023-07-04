import getServerSideProps from '@/shared/utils/getProps/getPropsWithAuthCheck';
import { ProfileLayout } from '@/widgets/ProfileLayout';
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
