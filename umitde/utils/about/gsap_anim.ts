import gsap from "gsap";
import { Power3 } from "gsap";


const runAboutAnims = () => {
    gsap.from(
        document.querySelector(".about_me__info--title"),
        { opacity: 0, x: -20 },
    );
    gsap.from(
        ".features_container .title_w_sum",
        {
            scrollTrigger: {
                trigger: ".features_container .title_w_sum",
            },
            y: 10,
            opacity: 0,
            duration: .7
        }
    );
    gsap.from(
        ".skills .title_w_sum",
        {
            scrollTrigger: ".skills .title_w_sum",
            y: 10,
            opacity: 0,
            duration: .7
        }
    )
    gsap.from(
        ".about_me__img img",
        {
            scrollTrigger: ".about_me__img img",
            x: 10,
            opacity: 0,
            duration: .7
        }
    )
    gsap.from(
        ".skills__info",
        {
            scrollTrigger: {
                trigger: ".skills__info",
            },
            y: -30,
            opacity: 0,
            duration: .7,
        }
    )
    gsap.from(".testimonials_container--title", {
        scrollTrigger: {
            trigger: ".testimonials_container--title",
        },
        y: 10,
        opacity: 0,
        duration: .7
    })
    const from_lefts = gsap.utils.toArray(".from_left");
    const from_rights = gsap.utils.toArray(".from_right");
    from_lefts.forEach(from_left => {
        gsap.from(from_left as any, {
            scrollTrigger: {
                trigger: from_left as null,
                start: "center center",
                snap: {
                    ease: Power3.easeIn,
                    delay: 1,
                }
            },
            opacity: 0,
            x: -300,
            duration: .7,
        });
    });
    from_rights.forEach(from_right => {
        gsap.from(from_right as any, {
            scrollTrigger: {
                trigger: from_right as null,
                start: "center center",
                snap: {
                    ease: Power3.easeIn
                }
            },
            opacity: 0,
            x: +300,
            duration: .7,
        });
    });
    // tl.from(".from_left2", {
    //     opacity: 0,
    //     x: -300,
    //     delay: .3,
    // });

    gsap.fromTo(
        document.querySelector(".about_me__info--desc"),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: .7 }
    )
}
export default runAboutAnims;