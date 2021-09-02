import React from 'react'
import { useRouter } from "next/router";


declare var toggleMobileMenu: () => void;

interface ChangeLangBtnTypes {
    isMobile?: boolean
}

const ChangeLangBtn: React.FC<ChangeLangBtnTypes> = ({isMobile}) => {
    const router = useRouter();
    const { locale } = router;
    const change_locale = locale === "tr" ? "en" : "tr"
    return (
            <button
                className="
                white_button
                with_arrow
                animate__animated animate__fadeInRight
                "
                style={{flexDirection: "column"}}
                onClick={
                    !isMobile ?
                    () => router.push(router.pathname, router.pathname, { locale: change_locale })
                    :
                    () => router.push(router.pathname, router.pathname, { locale: change_locale }).then(() => toggleMobileMenu())
                }
            >
                {change_locale.toUpperCase()}
            </button>
    ) 
}


export default ChangeLangBtn;