import React from "react"

import { useRouter } from "next/router";
import Link from "next/link";
import ChangeLangBtn from "../../translate/change-lang-btn";


const Header: React.FC = () => {
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
                            <li className="active"><a href="#">Blog</a></li>
                            <li>
                                <Link href="/about">Hakkımda</Link>
                            </li>
                            <li>
                                <Link href="/contact">İletişim</Link>
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