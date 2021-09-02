import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import tr from "../locales/home/tr"
import en from "../locales/home/en"


import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import runHomeAnims from '../utils/home/gsap_anims'

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "tr" ? tr : en;

  useEffect(() => {
    runHomeAnims();
  }, [])
  return (
    <div className="container">
      <div className="header--info">
        <div className="info--left animate__animated animate__fadeInUp">
          <h1 dangerouslySetInnerHTML={{__html: t.title}}></h1>
          {
            (<p dangerouslySetInnerHTML={{__html: t.description}}></p>)
          }
          <a 
            className="purple_button"
            onClick={() => 
              router.push("/about")
                .then(() => {
                  setTimeout(() => {
                      document.querySelector(".about_me__info--title")?.scrollIntoView(
                          {block: "end", inline: "nearest", behavior: "smooth"}
                      )
                  }, 400)
                })
            }
            >{t.btn_title}</a>
        </div>
        <div className="info--right">
          <Image src="/svg/develop.svg" alt="Thats me" width="1076" height="755"/>
        </div>
      </div>
    </div>
  )
}



export default Home
