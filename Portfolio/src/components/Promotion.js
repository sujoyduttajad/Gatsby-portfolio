import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Chrono } from "react-chrono";

const Promotion = () => {

  const items = [
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {  
          type: "IMAGE",
          source: {
            url: "https://images.unsplash.com/photo-1633113214866-961efd94c84d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          }
        }
      },
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {  
            type: "IMAGE",
            source: {
              url: "https://images.unsplash.com/photo-1633113214866-961efd94c84d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            }
              }
          }  
          ];


  return (
    <section className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
            <div style={{ width: "500px", height: "400px" }}>
            <Chrono items={items} />
            </div>
        </div>
      </div>
    </section>

    
  )
}

export default Promotion
