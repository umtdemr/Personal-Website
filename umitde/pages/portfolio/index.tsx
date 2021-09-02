import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";


const Portfolio: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Portfolyo - Ümit Demir</title>
      </Head>
      <div className="portfolio">
        <h2>Portfolyo</h2>
      </div>
    </div>
  )
}

export default Portfolio;