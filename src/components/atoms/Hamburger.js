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
            <button onClick={() => scrollTo("#work")}>
              <h4>Projects</h4>
            </button>
            <button onClick={() => scrollTo("#employement")}>
              <h4>Work</h4>
            </button>
            <button onClick={() => scrollTo("#about")}>
              <h4>About</h4>
            </button>
            <button onClick={() => scrollTo("#contact")}>
              <h4>Contact</h4>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Hamburger
