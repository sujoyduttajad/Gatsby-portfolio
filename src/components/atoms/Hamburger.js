import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hamburger = () => {


 
  return (
    <div className="nav-mobile">
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <div className="nav-wrapper">
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#employement")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Hamburger
