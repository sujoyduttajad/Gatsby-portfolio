import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../images/gatsby-icon.png"
import useWindowDimensions from "../hooks/useWindow"
import Hamburger from "./atoms/Hamburger"

const Navbar = () => {
  const { width } = useWindowDimensions()

  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          {/* ---- Gatsby logo ----- */}
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <p className="powered">My Portfolio</p>
            <span>
              <p>powered by </p>
              <img src={logo} alt="Gatsby" />
            </span>
          </div>
          {/* ----- Nav Pages ----- */}

          {width > 300 && width < 767 ? (
            <Hamburger />
          ) : (
            <div className="links-wrapper">
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
