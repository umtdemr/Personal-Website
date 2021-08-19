import React from "react"


const Header: React.FC = () => {
    return (
        <div className="header_wrapper">
            <div className="container">
                <div className="header">
                    <div className="header--top">
                    <a href="#" className="logo text">umitde<span className="logo--faded">mir</span></a>
                    <div className="header_last">
                        <ul className="header--top--menu">
                        <li className="active"><a href="#">Blog</a></li>
                        <li><a href="#">Hakkımda</a></li>
                        </ul>
                        <button
                        className="
                            white_button
                            with_arrow
                            animate__animated animate__fadeInRight
                        "
                        >
                        İletişime geç <i className="fas fa-arrow-right"></i>
                        </button>
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