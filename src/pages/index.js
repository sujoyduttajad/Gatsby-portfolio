import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/about"
import Skills from "../components/skills"
import WorkHistory from "../components/WorkHistory"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Sujoy Dutta Portfolio" />
    <Navbar />
    <Header />
    <Projects />
    <Skills />
    <WorkHistory />
    <About />
    <Footer />
  </Layout>
)

export default IndexPage
