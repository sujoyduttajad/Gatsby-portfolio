import React from "react"

const SkillCard = () => {
  return (
    <div
      className="skill"
   
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={skill.img} alt="css"></img>
      {hover && <p>{skill.para}</p>}
    </div>
  )
}

export default SkillCard
