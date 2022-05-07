import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { format } from "date-fns"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="footer-container">
        <Fade bottom cascade>
          <h1>Contact</h1>
          <h2>{data.contactSubHeading}</h2>
        </Fade>
        <div className="footer-wrapper">
          <div className="footer-links">
            <a className="email-link" href={`mailto:${data.contactEmail}`}>
              {data.contactEmail}
            </a>
            <div className="social-icons">
              {data.social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialLink.img} alt="icons"></img>
                </a>
              ))}
            </div>
            <span>
              Build With <icon>❤</icon> by{" "}
              <a href="https://github.com/sujoyduttajad">Sujoy Dutta</a>
            </span>
            <span>Copyright @{format(new Date(), "yyyy")}</span>
          </div>
          <div className="footer-form-container">
            <form>
                
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
