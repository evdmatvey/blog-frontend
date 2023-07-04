import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import { wrapper } from '@/app/redux/store';
import { Layout } from '@/widgets/Layout';

import '../app/styles/global.scss';
import '../app/styles/nprogress.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
