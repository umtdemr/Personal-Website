import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"


const About: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Hakkımda - Ümit Demir</title>
                <script async src="/js/skills.js"></script>
                <script async src="/plugins/swiper/js/swiper-bundle.min.js"></script>
                <link rel="stylesheet" href="/plugins/swiper/css/swiper-bundle.min.css" />
                {/* <script async defer src="/js/run.js"></script> */}
                {/* <script async src="/js/run.js"> <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                </script> */}
            </Head>
            <div className="about_me_container">
                <div className="about_me__info">
                    <h2>About Me</h2>
                    <p>
                        Düzce üniversitesi bilmem ne mezunuyum şunu yaptım bunu yaptım
                        şunu hallettim falan filan Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui itaque dolores harum provident! Quas beatae
                        quibusdam dolores rem recusandae tempore fuga veritatis dolor
                        doloribus voluptatibus consectetur, architecto corporis maxime
                        dolore? Aut, eius sit assumenda sed minus maxime asperiores cumque
                        architecto dolor. Numquam perferendis illum, modi, tempora sunt
                        provident adipisci veniam omnis dolor est, incidunt vero eveniet
                        ducimus inventore nostrum dignissimos.
                    </p>
                </div>
                <div className="about_me__img">
                    <img src="https://avatars.githubusercontent.com/u/61540809?v=4" alt="" />
                </div>
            </div>
            <div className="skills">
                <div className="title_w_sum">
                    <h2>Kullandığım Teknolojiler</h2>
                    <span>Kişisel veya projelerimde kullandığım teknolojik araçlar</span>
                </div>
                <div className="skills__info">
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
                            <p>
                                Django, python tabanlı full stack web uygulamaları yapmaya yarayan kütüphanedir.
                                Ben djangoyu Alışkanlık için değil deneyim için kullanıyorum.
                                minima sapiente itaque, quos quam suscipit corporis
                                exercitationem accusamus enim architecto mollitia sit excepturi
                                reiciendis quia repudiandae dignissimos! Placeat, rem.
                                Doloribus.
                            </p>
                        </div>
                        <div className="content" data-content={2}>
                            <h4 className="summary_title">React</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                                minima sapiente itaque, quos quam suscipit corporis
                                exercitationem accusamus enim architecto mollitia sit excepturi
                                reiciendis quia repudiandae dignissimos! Placeat, rem.
                                Doloribus.
                            </p>
                        </div>
                        <div className="content" data-content={3}>
                            <h4 className="summary_title">Django</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                                minima sapiente itaque, quos quam suscipit corporis
                                exercitationem accusamus enim architecto mollitia sit excepturi
                                reiciendis quia repudiandae dignissimos! Placeat, rem.
                                Doloribus.
                            </p>
                        </div>
                        <div className="content" data-content={4}>
                            <h4 className="summary_title">React</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                                minima sapiente itaque, quos quam suscipit corporis
                                exercitationem accusamus enim architecto mollitia sit excepturi
                                reiciendis quia repudiandae dignissimos! Placeat, rem.
                                Doloribus.
                            </p>
                        </div>
                        <div className="content" data-content={5}>
                            <h4 className="summary_title">React</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                                minima sapiente itaque, quos quam suscipit corporis
                                exercitationem accusamus enim architecto mollitia sit excepturi
                                reiciendis quia repudiandae dignissimos! Placeat, rem.
                                Doloribus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features_container">
                <div className="title_w_sum">
                    <h2>İlgi Alanlarım</h2>
                    <span>Profesyonel ve Hobi amaçlı ilgilendiğim bazı teknolojiler</span>
                </div>
                <div className="features">
                    <div className="feature__item">
                        <Image src="/svg/features/backend.svg" alt="qwewqe" layout="fill"/>
                        <img src="/svg/features/backend.svg" alt="" />
                        <div className="feature__item--info">
                            <h3>Backend</h3>
                            <p>
                                Web siteleri ve mobil uygulamalar için API ve backend servisi
                            </p>
                        </div>
                    </div>
                    <div className="feature__item">
                        <img src="svg/features/frontend.svg" alt="" />
                        <div className="feature__item--info">
                            <h3>Frontend</h3>
                            <p>
                                Access is given 24 hours a full morning to night and meet
                                again in the morning, giving you comfort when you need data
                                when urgent.
                            </p>
                        </div>
                    </div>
                    <div className="feature__item">
                        <img src="svg/features/mobile.svg" alt="" />
                        <div className="feature__item--info">
                            <h3>Mobile Apps</h3>
                            <p>
                                Print out service gives you convenience if someday you need
                                print data, just edit it all and just print it.
                            </p>
                        </div>
                    </div>
                    <div className="feature__item">
                        <img src="svg/features/devops.svg" alt="" />
                        <div className="feature__item--info">
                            <h3>Devops</h3>
                            <p>
                                Data Security is one of our best facilities. Allows for your
                                files to be safer. The file can be secured with a code or
                                password that you created, so only you can open the file.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div className="testimonials_container swiper-container">
            <h2 className="testimonials_container--title" data-aos-anchor-placement="top-bottom">
            Hakkımda Ne Diyorlar
            </h2>
            <div className="testimonial swiper-wrapper">
            <div className="testimonial__item swiper-slide active">
                <div className="testimonial__item--overlay" />
                <div className="testimonial__item--img">
                <img src="images/avatars/avatar1.png" alt="" />
                </div>
                <div className="testimonial__item--info">
                <h3 className="title">John Fang</h3>
                <span className="summary">UI/UIX Designer</span>
                <p>
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                    viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                    aenean nam laoreet nulla.
                </p>
                </div>
            </div>
            <div className="testimonial__item swiper-slide">
                <div className="testimonial__item--overlay" />
                <div className="testimonial__item--img">
                <img src="images/avatars/avatar1.png" alt="" />
                </div>
                <div className="testimonial__item--info">
                <h3 className="title">John Fang</h3>
                <span className="summary">UI/UIX Designer</span>
                <p>
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                    viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                    aenean nam laoreet nulla.
                </p>
                </div>
            </div>
            <div className="testimonial__item swiper-slide">
                <div className="testimonial__item--overlay" />
                <div className="testimonial__item--img">
                    <img src="images/avatars/avatar1.png" alt="" />
                </div>
                <div className="testimonial__item--info">
                    <h3 className="title">John Fang</h3>
                    <span className="summary">UI/UIX Designer</span>
                    <p>
                        Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                        viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                        aenean nam laoreet nulla.
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
    </div>

    )
}


export default About;