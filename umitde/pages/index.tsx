import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="header--info">
        <div className="info--left animate__animated animate__fadeInUp">
          <h1 className="">Software Developer</h1>
          <p>
            Merhaba, ben Ümit,<br />
            2016&apos;dan bu yana full stack web developer olma yolunda ilerliyorum. Bunun yanında hobi amaçlı mobil kodlamaya da ilgim bulunmakta.
            2019&apos;un mart ayından beri part time full stack web developer pozisyonunda çalışıyorum.
          </p>
          <Link href="/about" passHref>
            <a href="#" className="purple_button">Dahasını Öğren</a>
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
