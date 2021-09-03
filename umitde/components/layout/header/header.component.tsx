import React from "react"

import { useRouter } from "next/router";
import Link from "next/link";
import ChangeLangBtn from "../../translate/change-lang-btn";

import tr from "../../../locales/tr";
import en from "../../../locales/en";


const Header: React.FC = () => {
    const router = useRouter();
    const { locale } = router;
  
    const t = locale === "tr" ? tr : en;
    return (
        <div className="header_wrapper">
            <div className="container">
                <div className="header">
                    <div className="header--top">
                        <Link href="/" passHref>
                            <a className="logo text">umitde<span className="logo--faded">mir</span></a>
                        </Link>
                    <div className="header_last">
                        <ul className="header--top--menu">
                            <li className="active"><a href="https://medium.com/@umtdemr" target="_blank" rel="noreferrer">Blog</a></li>
                            <li>
                                <Link href="/about">{t.about}</Link>
                            </li>
                            <li>
                                <Link href="/portfolio">{t.portfolio}</Link>
                            </li>
                            <li>
                                <Link href="/contact">{t.contact}</Link>
                            </li>
                        </ul>
                        <ChangeLangBtn />
                    </div>
                    <a href="#" className="header_toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;