import React from "react"

const SkillCard = ({ skill, hover }) => {
  return (
    <div
      className="skill"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={skill.img} alt="skills" />
      {hover && <p>{skill.para}</p>}
    </div>
  )
}

export default SkillCard
