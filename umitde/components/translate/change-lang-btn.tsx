import React from 'react'
import { useRouter } from "next/router";

const ChangeLangBtn: React.FC = () => {
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
            onClick={() => router.push("/", "/", { locale: change_locale })}
        >
            {change_locale.toUpperCase()}
        </button>
   ) 
}


export default ChangeLangBtn;