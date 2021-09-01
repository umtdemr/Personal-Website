import React from 'react'
import Link from "next/link"
import ChangeLangBtn from '../../translate/change-lang-btn';

import { useRouter } from "next/router";

import tr from "../../../locales/tr";
import en from "../../../locales/en";

declare var toggleMobileMenu: () => void;

const MobileHeader: React.FC = () => {

  const router = useRouter();
  const { locale } = router;

  const t = locale === "tr" ? tr : en;
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
                    <a className="active" onClick={() => toggleMobileMenu()}>{t.about}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref>
                    <a className="active" onClick={() => toggleMobileMenu()}>{t.contact}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ChangeLangBtn />
        </div>
        </>
    )
}

export default MobileHeader;