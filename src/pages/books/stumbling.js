import React from "react"
import Layout from "../../components/layout"
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

const Stumbling = props => {
  return (
    <Layout>
      <div className="fade-in">
        <h1 className="title shrink">stumbling on happiness</h1>
        <StyledLink to="/books">
          <h4>back</h4>
        </StyledLink>
        <h4>main takeaways</h4>
        {/* <blockquote className="quote">
          "Monotony collapses time; novelty unfolds it."
        </blockquote> */}
        <p className="indent">
          Work in progress.
        </p>
          Overall Thoughts.

          Neither this book, nor moonwalking, taught me this, but I think after
          reading these two books I realized the importance of romanticizing life. 
          As someone who finds great difficulty in appreciating and holding on to the 
          little things, I think that this is properties of being happier.
        <p>

          <p>
            insert quote here

            This book really reinforced the importance of reading to me. One chapter discussed 
            how, psychologically, just telling someone something won't really make them absorb it.
            For example, virtually everyone would agree that hard work is the way to success. That's 
            a really easy fact to accept, but in order to really engrain that into you you have to 
            see the physically see the effects of it on your life or you have to make neural pathways that 
            associate hard work with ... this is going off topic
          </p>
          
        </p>
        {/* <p className="indent">
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
        </p> */}
        
      </div>
    </Layout>
  )
}

export default Stumbling
