import Head from 'next/head';
import getServerSideProps from '@/shared/utils/getProps/getPropsWithAuthCheck';
import { ProfileLayout } from '@/widgets/ProfileLayout';
import SettingsCard from '@/widgets/ProfileSettings/ui/SettingsCard';

const Settings = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Настройки</title>
      </Head>
      <ProfileLayout>
        <SettingsCard />
      </ProfileLayout>
    </>
  );
};

export default Settings;

export { getServerSideProps };
