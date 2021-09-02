import gsap from "gsap";
import { Power3 } from "gsap";


const runContactAnims = () => {
    gsap.from(
        ".skewed_container",
        {
            y: -10,
            duration: .7
        }
    )

    gsap.from(
        ".headline h1",
        {
            opacity: 0,
            y: 20,
            duration: .7
        }
    )
    // gsap.from(
    //     ".why-me--title",
    //     {
    //         scrollTrigger: {
    //             trigger: ".why-me--title"
    //         },
    //         opacity: 0,
    //         x: 50,
    //         duration: .7
    //     }
    // )
    // gsap.from(".contact_bottom p", {
    //     scrollTrigger: {
    //         trigger: ".contact_bottom p",
    //         start: "top center",
    //         scrub: 4
    //     },
    //     opacity: 0,
    //     y: 50,
    //     duration: .7
    // })
    // const why_me_lists = gsap.utils.toArray(".why-me--list li");
    // why_me_lists.forEach(list => {
    //     gsap.from(list as any, {
    //         scrollTrigger: {
    //             trigger: list as any
    //         },
    //         opacity: 0,
    //         x: 50,
    //         duration: .7
    //     })
    // });

}

export default runContactAnims;