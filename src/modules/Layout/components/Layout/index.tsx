import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '@/hooks/redux';
import { Header, HeaderWithBurger } from '@/modules/Header';
import { selectTheme } from '@/modules/ChangeTheme';
import Container from '@/ui/Container';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import { Footer } from '@/modules/Footer';

import styles from './Layout.module.scss';
import 'react-toastify/dist/ReactToastify.css';

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
