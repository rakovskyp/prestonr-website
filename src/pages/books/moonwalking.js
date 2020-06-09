import React from "react"
import Layout from "../../components/layout"
import SEO from '../../components/seo'
import styled from "styled-components"
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

const Moonwalking = props => {
  return (
    <Layout>

      <SEO title="Moonwalking with Einstein" />
      <div className="fade-in">
        <h1 className="title shrink">moonwalking with einstein</h1>
        <StyledLink to="/books">
          <h4>back</h4>
        </StyledLink>
        <h4>main takeaways</h4>
        <blockquote className="quote">
          "Monotony collapses time; novelty unfolds it."
        </blockquote>
        <p className="indent">
          Falling into the habit of doing the same thing every day leads to our
          days literally blending together in our memory. The problem with this
          is that it literally decreases our psychological sense of time. In a
          way, this makes it possible to live a long and healthy <em>short</em> life
          and a short and fun <em>long</em> life.
        </p>
        <p className="indent">
          In order to combat this, we need to increase the amount of "memory
          landmarks" in our minds. By switching up routines, saying yes more
          often, and just trying new things, it's posisble to increase your psychological sense
          of time, thus living <em>longer</em> lives.
        </p>

        <blockquote className="quote">
          "There is something to be said for the value of not
          merely passing through the world, but also making some effort to
          capture it – if only because in trying to capture it, one gets in the
          habit of noticing, and appreciating"
        </blockquote>
        <p className='indent'>
          Before this book, I never really had any desire to remember important, or really any 
          specific memories in general. I think after reading this book and this quote I really 
          started valuing the intentionality of trying to remember happy moments. They're easy to forget, 
          and once you do, you don't get it back.
        </p>
        
      </div>
    </Layout>
  )
}

export default Moonwalking
