import React from "react"

import Link from "next/link";


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

                        <Link href="/contact" passHref>
                            <button
                            className="
                            white_button
                            with_arrow
                            animate__animated animate__fadeInRight
                            "
                            >
                            İletişime geç <i className="fas fa-arrow-right"></i>
                            </button>
                        </Link>
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