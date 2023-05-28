import type { AppProps } from 'next/app';
import { GetServerSideProps } from 'next';
import * as Api from '@/api';
import { setUser } from '@/redux/slices/user.slice';
import { Provider } from 'react-redux';
import { Layout } from '@/modules/Layout';
import { wrapper } from '@/redux/store';

import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
