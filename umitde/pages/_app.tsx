import '../public/css/main.min.css'
import '../public/css/custom.css'
import '../public/plugins/fontawesome/css/all.min.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import Layout from '../components/layout/layout'


import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
export default MyApp
