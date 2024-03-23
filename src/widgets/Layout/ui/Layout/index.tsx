import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Header, HeaderWithBurger } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { selectTheme } from '@/features/ChangeTheme';
import { useGetWindowSize, useAppSelector } from '@/shared/hooks';
import Container from '@/shared/ui/Container';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Layout.module.scss';

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
        pauseOnHover={false}
        icon={false}
        theme={theme}
      />
    </>
  );
};

export default Layout;
