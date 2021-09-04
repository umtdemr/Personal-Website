import gsap from "gsap";
import { Power3 } from "gsap";


const runPortfolioAnims = () => {
    gsap.from(
        ".portfolio_wrapper--title",
        {
            scrollTrigger: {
                trigger: ".portfolio_wrapper--title",
            },
            y: 10,
            opacity: 0,
            duration: .7,
            ease: Power3.easeIn
        }
    );
    gsap.from(
        ".portfolio_wrapper--text",
        {
            scrollTrigger: {
                trigger: ".portfolio_wrapper--title",
            },
            y: -10,
            opacity: 0,
            duration: .7,
            ease: Power3.easeIn
        }
    );
    gsap.from(
        ".portfolio__item--group.first",
        {
            scrollTrigger: {
                trigger: ".portfolio__item--group.first",
            },
            y: 100,
            opacity: 0,
            duration: .7,
            ease: Power3.easeIn
        }
    );
    gsap.from(
        ".portfolio__item--group.second",
        {
            scrollTrigger: {
                trigger: ".portfolio__item--group.second",
            },
            y: -100,
            opacity: 0,
            duration: .7,
            ease: Power3.easeIn
        }
    );
    gsap.from(
        ".portfolio__item--group.last",
        {
            scrollTrigger: {
                trigger: ".portfolio__item--group.last",
            },
            y: 300,
            opacity: 0,
            duration: .7,
            ease: Power3.easeIn
        }
    );
}
export default runPortfolioAnims;