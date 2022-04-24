import React from "react"

const SkillCard = ({ skill, hover, setHover }) => {
  return (
    <div
      className="skill"
      onClick={() => setHover(true)}
    >
      <img src={skill.img} alt="skills" />
      {hover && (
        <div className="tooltip">
          <span className="tooltiptext">{skill.para}</span>
        </div>
      )}
    </div>
  )
}

export default SkillCard
