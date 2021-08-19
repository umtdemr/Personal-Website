import Head from "next/head";
import Script from "next/script";


import Header from "./header/header.component";
import Footer from "./footer/footer.component";
import MobileHeader from "./header/mobile-header.component";


interface LayoutProps {
  children: React.ReactNode;
}


export default function Layout({ children}:  LayoutProps) {
  return (
    <>
      <Head>
        <title>Ümit Demir</title>
      </Head> 
      <MobileHeader />
      <div className="content">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )

}