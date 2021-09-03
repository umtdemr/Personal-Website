import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";


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
          <div className="portfolio__item">
            <img src="/images/portfolio/hierapi.png" alt="Hierapi" className="portfolio__item--img"/>
            <span className="portfolio__item--title">Hierapi</span>
            <span className="portfolio__item--end">E Ticaret</span>
            <div className="portfolio__item--overlay"></div>
            <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
          </div>
          <div className="portfolio__item">
            <img src="/images/portfolio/hierapi.png" alt="Hierapi" className="portfolio__item--img"/>
            <span className="portfolio__item--title">Hierapi</span>
            <span className="portfolio__item--end">E Ticaret</span>
            <div className="portfolio__item--overlay"></div>
            <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
          </div>
          <div className="portfolio__item">
            <img src="/images/portfolio/hierapi.png" alt="Hierapi" className="portfolio__item--img"/>
            <span className="portfolio__item--title">Hierapi</span>
            <span className="portfolio__item--end">E Ticaret</span>
            <div className="portfolio__item--overlay"></div>
            <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
          </div>
          <div className="portfolio__item">
            <img src="/images/portfolio/hierapi.png" alt="Hierapi" className="portfolio__item--img"/>
            <span className="portfolio__item--title">Hierapi</span>
            <span className="portfolio__item--end">E Ticaret</span>
            <div className="portfolio__item--overlay"></div>
            <a href="https://hierapi.com" target="_blank" rel="noreferrer">Projeye göz at</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;