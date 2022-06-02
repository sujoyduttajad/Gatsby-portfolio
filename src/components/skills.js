import React from "react"
import data from "../yourdata"
import SkillCard from "./SkillCard"
import Fade from "react-reveal/Fade"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade bottom cascade>
            <h1>Skills</h1>
            <div className="skills-grid">
              {data.skills.map((skill, index) => (
                <SkillCard skill={skill} key={index} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Skills
