import React from 'react'


const Footer: React.FC = () => {
    return (
        <>
        <footer>
            <div className="full_divider"></div>
            <div className="container">
                <div className="footer_container">
                    <div className="footer_left">
                        <a href="/" className="footer_logo logo">umitde<span className="logo--faded">mir</span></a>
                    </div>
                    <div className="footer_right">
                        <div className="socials">
                            <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/umtdemr/"
                            className="social__item"
                            ><i className="fab fa-github"></i
                            ></a>
                            <a
                            target="_blank"
                            rel="noreferrer"
                            href="#"
                            className="social__item"
                            ><i className="fab fa-linkedin"></i
                            ></a>
                            <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://instagram.com/umt.demr/"
                            className="social__item"
                            ><i className="fab fa-instagram"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}


export default Footer;