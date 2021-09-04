import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Masonry from "react-masonry-component"


const Portfolio: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Portfolyo - Ümit Demir</title>
      </Head>
      <div className="portfolio_wrapper">
        <h2 className="portfolio_wrapper--title">Portfolyo</h2>
        <p className="portfolio_wrapper--text">Bugüne kadar yaptığım bazı işler</p>
        <div className="portfolio">
          <div className="portfolio__item--group first">
            <div className="portfolio__item" style={{height: "300px"}}>
              <div className="portfolio__item--img">
                <Image src="/images/portfolio/hierapi.png" alt="" width={508} height={736} />
              </div>
              <div className="portfolio__item--content">
                <div className="content_header">
                  <span className="portfolio__item--title">Hierapi</span>
                  <span className="portfolio__item--end">E Ticaret</span>
                </div>
                <div className="content_bottom">
                  <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
                </div>
              </div>
              <div className="portfolio__item--overlay" style={{backgroundColor: "#212353"}}></div>
            </div>
            <div className="portfolio__item" style={{height: "300px"}}>
              <div className="portfolio__item--img">
                <Image src="/images/portfolio/hierapi.png" alt="" width={508} height={736} />
              </div>
              <div className="portfolio__item--content">
                <div className="content_header">
                  <span className="portfolio__item--title">Hierapi</span>
                  <span className="portfolio__item--end">E Ticaret</span>
                </div>
                <div className="content_bottom">
                  <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
                </div>
              </div>
              <div className="portfolio__item--overlay" style={{backgroundColor: "#9c69e2"}}></div>
            </div>

          </div>
          <div className="portfolio__item--group second">
            <div className="portfolio__item" style={{height: "300px"}}>
              <div className="portfolio__item--img">
                <Image src="/images/portfolio/hierapi.png" alt="" width={508} height={736} />
              </div>
              {/* <img src="/images/portfolio/hierapi.png" alt="Hierapi" className="portfolio__item--img"/> */}
              <div className="portfolio__item--content">
                <div className="content_header">
                  <span className="portfolio__item--title">Hierapi</span>
                  <span className="portfolio__item--end">E Ticaret</span>
                </div>
                <div className="content_bottom">
                  <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
                </div>
              </div>
              <div className="portfolio__item--overlay" style={{background: "linear-gradient(90deg,#777bf8,#9c69e2 200%)"}}></div>
            </div>
            <div className="portfolio__item" style={{height: "300px"}}>
              <div className="portfolio__item--img">
                <Image src="/images/portfolio/hierapi.png" alt="" width={508} height={736} />
              </div>
              <div className="portfolio__item--content">
                <div className="content_header">
                  <span className="portfolio__item--title">Hierapi</span>
                  <span className="portfolio__item--end">E Ticaret</span>
                </div>
                <div className="content_bottom">
                  <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
                </div>
              </div>
              <div className="portfolio__item--overlay" style={{backgroundColor: "#657D39"}}></div>
            </div>
          </div>
          <div className="portfolio__item--group last">

            <div className="portfolio__item" style={{height: "300px"}}>
              <div className="portfolio__item--img">
                <Image src="/images/portfolio/hierapi.png" alt="" width={508} height={736} />
              </div>
              <div className="portfolio__item--content">
                <div className="content_header">
                  <span className="portfolio__item--title">Hierapi</span>
                  <span className="portfolio__item--end">E Ticaret</span>
                </div>
                <div className="content_bottom">
                  <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
                </div>
              </div>
              <div className="portfolio__item--overlay" style={{backgroundColor: "#C54647"}}></div>
            </div>
            <div className="portfolio__item" style={{height: "300px"}}>
              <div className="portfolio__item--img">
                <Image src="/images/portfolio/hierapi.png" alt="" width={508} height={736} />
              </div>
              <div className="portfolio__item--content">
                <div className="content_header">
                  <span className="portfolio__item--title">Hierapi</span>
                  <span className="portfolio__item--end">E Ticaret</span>
                </div>
                <div className="content_bottom">
                  <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
                </div>
              </div>
              <div className="portfolio__item--overlay" style={{backgroundColor: "#FF7600"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;