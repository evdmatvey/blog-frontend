import Head from 'next/head';
import getServerSideProps from '@/shared/utils/getProps/getPropsWithAuthCheck';
import { ProfileLayout } from '@/widgets/ProfileLayout';
import { ProfileSettingsCard } from '@/widgets/ProfileSettings';

const Settings = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Настройки</title>
      </Head>
      <ProfileLayout>
        <ProfileSettingsCard />
      </ProfileLayout>
    </>
  );
};

export default Settings;

export { getServerSideProps };
