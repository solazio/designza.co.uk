import React from "react"

const Title = () => {
  return (
    <h1 className="p-strip__title">
      <span>We build</span>
      <div className="p-title__flip">
        <ul className="flip4">
          <li>innovative</li>
          <li>fast</li>
          <li>responsive</li>
          <li>secure</li>
        </ul>
      </div>
      <br />
      websites & apps that help{" "}
      <span style={{ fontWeight: "300" }}>your businesses grow fast</span>
    </h1>
  )
}

export default Title
