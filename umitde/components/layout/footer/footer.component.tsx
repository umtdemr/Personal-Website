import Link from 'next/link';
import React from 'react'

import { useRouter } from "next/router";


const Footer: React.FC = () => {
  const router = useRouter();
    return (
        <>
        <footer>
            <div className="full_divider"></div>
            <div className="container">
                <div className="footer_container">
                    <div className="footer_left">
                        <a 
                          className="footer_logo logo"
                          onClick={() => 
                            router.push("/")
                              .then(() => {
                                setTimeout(() => {
                                    document.querySelector(".header--top")?.scrollIntoView(
                                        {block: "end", inline: "nearest", behavior: "smooth"}
                                    )
                                }, 400)
                              })
                          }
                          >umitde<span className="logo--faded">mir</span></a>
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