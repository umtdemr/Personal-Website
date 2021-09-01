import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import tr from "../locales/home/tr"
import en from "../locales/home/en"


import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "tr" ? tr : en;
  return (
    <div className="container">
      <div className="header--info">
        <div className="info--left animate__animated animate__fadeInUp">
          <h1 className="">{t.title}</h1>
          {
            (<p dangerouslySetInnerHTML={{__html: t.description}}></p>)
          }
          <Link href="/about" passHref>
            <a href="#" className="purple_button">{t.btn_title}</a>
          </Link>
        </div>
        <div className="info--right">
          <Image src="/svg/develop.svg" alt="Thats me" width="1076" height="755"/>
        </div>
      </div>
    </div>
  )
}



export default Home
