import React from "react"
import Layout from "../../components/layout"
import styled from "styled-components"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const StyledLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  padding: 0 15px;
  float: right;
  text-align: right;
  position: relative;
  text-decoration: none;
  text-decoration-color: initial;
  text-decoration-style: initial;
  color: black;
  font-family: georgia, serif;
`

const Stumbling = props => {
  return (
    <Layout>
      <SEO title="Stumbling on Happiness" />
      <div className="fade-in">
        <h1 className="title shrink">stumbling on happiness</h1>
        <StyledLink to="/books">
          <h4>back</h4>
        </StyledLink>
        
        <h3>the future</h3>
        <h4>We are incredibly bad at imagining how we will feel in future scenarios</h4>

        <p className="indent">
          For example, it's easy to imagine that I would be pretty happy if I were Mark Zuckerbug. I would have 
          more money, power, and status than I would know what 
          to do with.
        </p>

        <p className="indent">
          When imagine ourselves in a future scenario that we think will make us happy, 
          we tend to fill in and leave out details that we <em>assume</em> will work themselves out.
        </p>

        <p className="indent">
          When I wrote that sentence above, I immediately assumed that I would have a completely happy marriage, happy family, despite the fact that his work life balance is probably borderline non-existent because you can't have all of that and have free time, let alone hobbies.
        </p>

        <p></p>

      </div>
    </Layout>
  )
}

export default Stumbling
