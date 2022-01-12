import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="p-strip is-deep">
        <div className="u-fixed-width">
          <h1>
            Reshaping <strong>design</strong>, <strong>data</strong> and <strong>technology</strong>.
          </h1>
        </div>
      </section>
      <section className="p-strip--light is-slanted--top-left">
        <div className="u-fixed-width">
          <h2 className="p-heading--3">
            We believe in you! It&rsquo;s time for you to believe as well.
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
      </section>
    </Layout>
  )
}

export default AboutPage
