import '../public/css/main.min.css'
import '../public/css/custom.css'
import '../public/plugins/fontawesome/css/all.min.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
export default MyApp
