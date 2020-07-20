import React from "react"

import SEO from "../components/seo"
import Preston from '../components/preston'
import Nav from '../components/nav'

const IndexPage = () => (

  <>
    <SEO 
    title="Preston Rakovsky | Home"
    />
    <Preston/>
    
    <div className="headerLanding landing-fade-in">
      <Nav />
    </div>
  </>
)

export default IndexPage
