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
            My Portfolio
            <span>
              <p>powered by </p>
              <img src={logo} alt="Gatsby" />
            </span>
          </div>
          {/* ----- Navbar ----- */}

          {( width < 767 ) ? (
            <Hamburger />
          ) : (
            <div className="links-wrapper">
              <button onClick={() => scrollTo("#work")}>Projects</button>
              <button onClick={() => scrollTo("#employement")}>Work</button>
              <button onClick={() => scrollTo("#about")}>About</button>
              <button onClick={() => scrollTo("#contact")}>Contact</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
