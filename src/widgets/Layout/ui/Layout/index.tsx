import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '@/shared/hooks/redux';
import { useGetWindowSize } from '@/shared/hooks/useGetWindowSize';
import Container from '@/shared/ui/Container';

import styles from './Layout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { selectTheme } from '@/features/ChangeTheme';
import { Header, HeaderWithBurger } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useGetWindowSize();
  const theme = useAppSelector(selectTheme);

  return (
    <>
      <>
        {width && width > 760 ? <Header /> : <HeaderWithBurger />}
        <main className={styles.root}>
          <Container>{children}</Container>
        </main>
        <Footer />
      </>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={false}
        theme={theme}
      />
    </>
  );
};

export default Layout;
