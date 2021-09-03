import React from "react"

import { useRouter } from "next/router"
import Image from "next/image"

import tr from "../../locales/about/tr"
import en from "../../locales/about/en"


const Testimonials: React.FC = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "tr" ? tr : en

    return (
        <div className="testimonials_container swiper-container">
        <h2 className="testimonials_container--title" data-aos-anchor-placement="top-bottom">
        Hakkımda Ne Diyorlar
        </h2>
        <div className="testimonial swiper-wrapper">
            <div className="testimonial__item swiper-slide active">
                <div className="testimonial__item--overlay" />
                <div className="testimonial__item--img">
                    <Image src="/images/avatars/avatar3.png"
                        width="400"
                        height="400"
                        alt="John Doe"
                    />
                </div>
                <div className="testimonial__item--info">
                    <h3 className="title">John Doe</h3>
                    <span className="summary">{t.job.title}</span>
                    <p dangerouslySetInnerHTML={{__html: t.job.message}}>
                    </p>
                </div>
            </div>
            <div className="testimonial__item swiper-slide">
                <div className="testimonial__item--overlay" />
                <div className="testimonial__item--img">
                    <Image src="/images/avatars/avatar2.png"
                        width="400"
                        height="400"
                        alt="Şehriban Ürün"
                    />
                </div>
                <div className="testimonial__item--info">
                    <h3 className="title">Jane Doe</h3>
                    <span className="summary">{t.job.title}</span>
                    <p dangerouslySetInnerHTML={{__html: t.job.message}}>
                    </p>
                </div>
            </div>
        </div>
        <div className="actions">
            <div className="swiper-pagination swiper-button-white" />
        </div>
        {/* If we need navigation buttons */}
        <div className="swiper-button-prev swiper-button-white" />
        <div className="swiper-button-next swiper-button-white" />
    </div>
    )
}

export default Testimonials;
