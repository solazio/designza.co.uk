import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="p-strip-main">
        <div className="u-fixed-width">
          <Title />
          {/* <div className="background-line"></div> */}
        </div>
      </div>
      <div className="p-strip--light is-slanted--top-right">
        <div className="u-fixed-width">
          <h2 className="p-heading--4">
            Weather you need a website for your business, a personal blog or an
            online portofolio, you are in the right place.
          </h2>
          <p>
            Dqlite (“distributed SQLite”) extends SQLite across a cluster of
            machines, with automatic failover and high-availability to keep your
            application running. It uses C-Raft, an optimised Raft
            implementation in C, to gain high-performance transactional
            consensus and fault tolerance while preserving SQlite’s outstanding
            efficiency and tiny footprint.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
