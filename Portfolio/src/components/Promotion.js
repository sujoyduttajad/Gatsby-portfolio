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
              mode="VERTICAL_ALTERNATING" 
            />
            </div>
        </div>
      </div>
    </section>

    
  )
}

export default Promotion
