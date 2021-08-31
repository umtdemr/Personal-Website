import React from 'react'
import Link from "next/link"

declare var toggleMobileMenu: () => void;

const MobileHeader: React.FC = () => {
    return (
        <>
        <div className="mobile_menu--overlay"></div>
        <div className="mobile_menu">
          <div className="mobile_menu--first">
            <div className="mobile_menu--logo">
              <Link href="/" passHref>
                <a href="#" onClick={() => toggleMobileMenu()} className="logo text">umitde<span className="logo--faded">mir</span></a>
              </Link>
              <a href="#" className="mobile_menu--closer"
                ><i className="far fa-times-circle"></i
              ></a>
            </div>
            <div className="mobile_menu--menu">
              <ul>
                <li><a href="#" onClick={() => toggleMobileMenu()}>Blog</a></li>
                <li>
                  <Link href="/about" passHref>
                    <a className="active" onClick={() => toggleMobileMenu()}>Hakkımda</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile_menu--last">
            <Link href="/contact" passHref>
              <button className="white_button with_arrow" onClick={() => toggleMobileMenu()}>
                İletişime geç <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
        </>
    )
}

export default MobileHeader;