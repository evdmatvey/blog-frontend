import { AuthCard } from '@/widgets/AuthCard';
import getServerSideProps from '@/shared/utils/getProps/getProps';

const Auth = () => {
  return (
    <>
      <AuthCard />
    </>
  );
};

export default Auth;

export { getServerSideProps };
