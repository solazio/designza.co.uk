import React from "react"

const Footer = () => {
  return (
    <footer className="p-footer is-dark">
      <div className="row">
        <div className="col-4 p-footer--left">
          <p className="u-no-margin--bottom">
            Designed and built by{" "}
            <a className="p-link" href="https://github.com/solazio">
              solazio
            </a>
          </p>
        </div>
        <div className="col-4 p-footer--center">
          <p className="u-no-margin--bottom">
            Copyright © 2020{" "}
            <a href="https://designza.co.uk" className="p-link">
              Designza Ltd
            </a>
            . All rights reserved
          </p>
        </div>
        <div className="col-4 p-footer--right">
          <a href="https://www.facebook.com/pages/Canonical/125818784107695?fref=ts">
            <i className="p-icon--facebook"></i>
          </a>
          <a href="https://twitter.com/Canonical">
            <i className="p-icon--twitter"></i>
          </a>
          <a href="https://www.youtube.com/user/celebrateubuntu">
            <i className="p-icon--youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
