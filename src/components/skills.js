import React, { useState } from "react"
import data from "../yourdata"

const Skills = () => {
  const [hover, setHover] = useState(false)

  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div
                className="skill"
                key={index}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img src={skill.img} alt="css"></img>
                {hover && <p>{skill.para}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
