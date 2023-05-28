import Head from 'next/head';
import { ProfileLayout } from '@/modules/ProfileLayout';

const Settings = () => {
  return (
    <>
      <Head>
        <title>evd.matvey - Настройки</title>
      </Head>
      <ProfileLayout>Настройки</ProfileLayout>
    </>
  );
};

export default Settings;
