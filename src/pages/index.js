import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/about"
import Skills from "../components/skills"
import WorkHistory from "../components/WorkHistory"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Projects></Projects>
    <About></About>
    <Skills></Skills>
    <WorkHistory></WorkHistory>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
