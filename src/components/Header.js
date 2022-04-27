import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"


const Header = () => {  

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm <span className="firstName">{data.name} </span>
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>{data.headerTagline[0] ? data.headerTagline[0] : ""}</h1>
              <h1> {data.headerTagline[1] ? data.headerTagline[1] : ""}</h1>
              <h1> {data.headerTagline[2] ? data.headerTagline[2] : ""}</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail
                  ? data.contactEmail
                  : "sujoyduttajad@gmail.com"
              }`}
              className="primary-btn"
            >
              SEND A MAIL
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
