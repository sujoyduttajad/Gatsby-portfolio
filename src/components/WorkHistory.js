import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Chrono } from "react-chrono";

const WorkHistory = () => {


  return (
    <section className="section" id="employement">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
            <div style={{ width: "80%", height: "50%" }}>
              <Chrono 
                items={data.workHistory}
                hideControls={true} 
                scrollable={false}
                theme={{ 
                  primary: "#2F9DF1",
                  secondary: "#333",
                  cardForeColor: "#2F9DF1",
                  titleColor: "#fff"
                }}
                mode="VERTICAL_ALTERNATING" 
              />
            </div>
        </div>
      </div>
    </section>

    
  )
}

export default WorkHistory
