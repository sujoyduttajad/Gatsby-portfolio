import React from "react"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <Slide left>
              <div>
                <p>{data.aboutParaOne}</p>
                <br></br>
                <br></br>
                <p>{data.aboutParaTwo}</p>
                <br></br>
                <br></br>
                <p>{data.aboutParaThree}</p>
              </div>
            </Slide>
          </div>
          <Slide right>
            <div className="image-wrapper">
              <img src={data.aboutImage} alt="about"></img>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default About
