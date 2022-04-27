import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hamburger = () => {
  return (
    <section className="nav-mobile">
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <div className="nav-wrapper">
            <button onClick={() => scrollTo("#work")}>
              <p>Projects</p>
            </button>
            <button onClick={() => scrollTo("#employement")}>
              <p>Work</p>
            </button>
            <button onClick={() => scrollTo("#about")}>
              <p>About</p>
            </button>
            <button onClick={() => scrollTo("#contact")}>
              <p>Contact</p>
            </button>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Hamburger
