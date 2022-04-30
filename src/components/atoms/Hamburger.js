import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hamburger = () => {
  return (
    <nav className="nav-mobile" role="navigation">
      <div className="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <div className="nav-wrapper">
          <button onClick={() => scrollTo("#work")}>
            <p>Projects</p>
          </button>
          <button onClick={() => scrollTo("#about")}>
            <p>About</p>
          </button>
          <button onClick={() => scrollTo("#employement")}>
            <p>Work</p>
          </button>
          <button onClick={() => scrollTo("#contact")}>
            <p>Contact</p>
          </button>

          <div className="ham-footer">
            Build With <icon>❤</icon> by{" "}
            <a href="https://github.com/sujoyduttajad">Sujoy Dutta</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Hamburger
