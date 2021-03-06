import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Timeline from "@material-ui/lab/Timeline"
import TimelineCard from "./atoms/TimelineCard"

const WorkHistory = () => {
  return (
    <section className="section" id="employement">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
            <div style={{ width: "80%", height: "50%" }}>
              <Timeline align="alternate">
                {data.workHistory.map((work, index) => (
                  <TimelineCard key={index} work={work} />
                ))}
              </Timeline>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default WorkHistory
