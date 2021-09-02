import gsap from "gsap";
import { Power3 } from "gsap";


const runHomeAnims = () => {
    gsap.from(
        ".info--left h1",
        {
            opacity: 0,
            y: 10,
            duration: .7
        }
    )
    gsap.from(
        ".info--left p",
        {
            opacity: 0,
            y: -10,
            duration: .7
        }
    )
    gsap.from(
        ".info--left .purple_button",
        {
            opacity: 0,
            x: 100,
            duration: .7
        }
    )

}

export default runHomeAnims;