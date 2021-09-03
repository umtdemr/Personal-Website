import type { NextPage } from "next";
import Link from "next/link";
import Script from "next/script"
import Head from "next/head";
import Image from "next/image"
import { useRouter } from "next/router"

import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import runJs from "../../utils/about/run";
import runAboutAnims from "../../utils/about/gsap_anim";
import tr from "../../locales/about/tr"
import en from "../../locales/about/en"
import Testimonials from "../../components/testimonials/testimonials.component";

gsap.registerPlugin(ScrollTrigger);

const About: NextPage = () => {
    const router = useRouter();
    const { locale } = router;

    const t = locale === "tr" ? tr : en;
    useEffect(() => {
       
        runAboutAnims();
        // runJs();
        if (typeof window !== "undefined") {
          runJs();
        }
    }, [])
    return (
        <div className="container">
            <Head>
                <title>{t.seo.title} - Ümit Demir</title>
                <link rel="stylesheet" href="/plugins/swiper/css/swiper-bundle.min.css" />
            </Head>
            <Script src="/plugins/swiper/js/swiper-bundle.min.js"  strategy="beforeInteractive"/>
            <Script src="/js/skills.js" strategy="beforeInteractive"/>
            <div className="about_me_container">
                <div className="about_me__info">
                    <h2 className="about_me__info--title opacity_anim">{t.title}</h2>
                    {<p dangerouslySetInnerHTML={{__html: t.description}} className="about_me__info--desc"></p>}
                </div>
                <div className="about_me__img">
                    <Image src="/images/me.jpg" alt="Ümit Demir" width={460} height={460} />
                    {/* <img src="https://avatars.githubusercontent.com/u/61540809?v=4" alt="" /> */}
                </div>
            </div>
            <div className="skills">
                <div className="title_w_sum anim_y_top">
                    <h2>{t.skills.title}</h2>
                    <span>{t.skills.desc}</span>
                </div>
                <div className="skills__info anim_y_top">
                    <div className="skills__info--techs" id="tech_wrapper">
                        <a className="tech_item active" href="#" data-target={1}><span>Django</span></a>
                        <a className="tech_item" href="#" data-target={2}><span>React</span></a>
                        <a className="tech_item" href="#" data-target={3}><span>Typescript</span></a>
                        <a className="tech_item" href="#" data-target={4}><span>Vue</span></a>
                        <a className="tech_item" href="#" data-target={5}><span>Flutter</span></a>
                        <div className="tech_selection" />
                    </div>
                    <div className="skills__info--summary" id="skills_info_wrapper">
                        <div className="content active" data-content={1}>
                            <h4 className="summary_title">Django</h4>
                            <p dangerouslySetInnerHTML={{__html: t.skills.techs.django}}>

                            </p>
                        </div>
                        <div className="content" data-content={2}>
                            <h4 className="summary_title">React</h4>
                            <p dangerouslySetInnerHTML={{__html: t.skills.techs.react}}>

                            </p>
                        </div>
                        <div className="content" data-content={3}>
                            <h4 className="summary_title">Typescript</h4>
                            <p dangerouslySetInnerHTML={{__html: t.skills.techs.typescript}}>

                            </p>
                        </div>
                        <div className="content" data-content={4}>
                            <h4 className="summary_title">Vue</h4>
                            <p dangerouslySetInnerHTML={{__html: t.skills.techs.vue}}>

                            </p>
                        </div>
                        <div className="content" data-content={5}>
                            <h4 className="summary_title">Flutter</h4>
                            <p dangerouslySetInnerHTML={{__html: t.skills.techs.flutter}}></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features_container">
                <div className="title_w_sum anim_y_top">
                    <h2>{t.interested.title}</h2>
                    <span>{t.interested.desc}</span>
                </div>
                <div className="features">
                    <div className="feature__item from_left opacity_anim">
                        <img src="svg/features/backend.svg" alt="Backend" />
                        <div className="feature__item--info">
                            <h3>{t.interested.interesteds.backend.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: t.interested.interesteds.backend.desc}}>
                            </p>
                        </div>
                    </div>
                    <div className="feature__item from_right opacity_anim">
                        <img src="svg/features/frontend.svg" alt="Frontend" />
                        <div className="feature__item--info">
                            <h3>{t.interested.interesteds.frontend.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: t.interested.interesteds.frontend.desc}}>
                            </p>
                        </div>
                    </div>
                    <div className="feature__item from_left opacity_anim">
                        <img src="svg/features/mobile.svg" alt="Mobile" />
                        <div className="feature__item--info">
                            <h3>{t.interested.interesteds.mobile.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: t.interested.interesteds.mobile.desc}}>
                            </p>
                        </div>
                    </div>
                    <div className="feature__item from_right opacity_anim">
                        <img src="svg/features/devops.svg" alt="Devops" />
                        <div className="feature__item--info">
                            <h3>{t.interested.interesteds.devops.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: t.interested.interesteds.devops.desc}}>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
            <a 
                href="#" 
                className="white_button about_contact_btn"
                onClick={() => { router.push("/contact").then(() =>
                    setTimeout(() => {
                        document.querySelector(".headline")?.scrollIntoView(
                            {block: "end", inline: "nearest", behavior: "smooth"}
                        )
                    }, 400)
                    )}
                }
            >{t.contact_btn_text}</a>
        </div>

    )
}


export default About;