/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
         <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177265972-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-177265972-1');
        </script>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="temp-layout">
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Designza Ltd</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
