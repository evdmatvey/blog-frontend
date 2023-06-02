import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '@/app/redux/store';

import '../app/styles/global.scss';
import { Layout } from '@/widgets/Layout';

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
