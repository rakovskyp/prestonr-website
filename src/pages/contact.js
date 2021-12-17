import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="fade-in">
        <h1 className="title shrink">contact</h1>
        <p>
          <a className="links" href="mailto:rakovsky.p@northeastern.edu">
            Email
          </a>{" "}
          /
          <a
            className="links"
            href="https://www.linkedin.com/in/rakovskypreston/"
            target="_blank"
          >
            {" "}
            LinkedIn
          </a>{" "}
          /
          <a
            className="links"
            href="https://github.com/rakovskyp"
            target="_blank"
          >
            {" "}
            Github
          </a>{" "}
          /
          <a
            className="links"
            href="https://prestonr.xyz/resume.pdf"
            target="_blank"
          >
            {" "}
            Resume
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default Contact
