import React from "react"
import data from "../yourdata"
import SkillCard from "./SkillCard"

const Skills = () => {
  

  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <SkillCard
                skill={skill}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
