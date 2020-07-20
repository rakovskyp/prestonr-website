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

    <Helmet>
      <meta property="og:image" content="https://prestonr.xyz/icons/icon-72x72.png?v=6169ddc33599dc420ddda80d2986cc2b"></meta>
    </Helmet>
    
    <div className="headerLanding landing-fade-in">
      <Nav />
    </div>
  </>
)

export default IndexPage
