import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Chrono } from "react-chrono";

const Promotion = () => {


  return (
    <section className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
            <div>
            <Chrono 
              items={data.workHistory}
              hideControls={true} 
              scrollable={false}
              useReadMore={false}
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

export default Promotion
