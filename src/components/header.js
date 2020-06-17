import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "designza-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            src
          }
        }
      }
    }
  `)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header id="navigation" className="p-navigation">
      <div className="p-navigation__row">
        <div className="p-navigation__banner">
          <div className="p-navigation__logo">
            <img
              className="p-navigation__image"
              src={data.placeholderImage.childImageSharp.fluid.src}
              alt=""
              width="175"
              height="45.5"
            />
          </div>
          <div
            className={
              isOpen ? "p-navigation__toggle is-open" : "p-navigation__toggle"
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="p-navigation__bar" />
            <div className="p-navigation__bar" />
            <div className="p-navigation__bar" />
          </div>
        </div>
        <nav className="p-navigation__nav">
          <span className="u-off-screen">
            <a href="#main-content">Jump to main content</a>
          </span>
          <ul className="p-navigation__items" role="menu">
            <li className="p-navigation__item" role="menuitem">
              <a href="/" className="p-navigation__link">
                Home
              </a>
            </li>
            <li className="p-navigation__item" role="menuitem">
              <a href="/about" className="p-navigation__link">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
