import React from 'react';
import Layout from '../../components/layout'
import styled from "styled-components";
import { Link } from 'gatsby';

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
`;

const Moonwalking = (props) => {
    return (
        <Layout>
            <div className='fade-in'>
              <h1 className='title shrink'>moonwalking with einstein</h1>
              <StyledLink to='/books'><h4>back</h4></StyledLink>
              <h4>Main Takeaways</h4>
              <blockquote className="quote">"Monotony collapses time; novelty unfolds it."</blockquote>
              <p className='indent'>Falling into the habit of doing the same thing every day leads to 
              our days literally blending together in our memory. The problem with this is that it literally decreases 
              our psychological sense of time. In a way, this makes it possible to live a long and healthy "short" life and
              a short and fun "long" life.</p>
              <p className='indent'>In order to combat this, we need to increase the amount of "memory landmarks" in our minds.
               By switching up routines, saying yes more often, and trying new things, we can increase our psychological sense of time,
               thus living "longer" lives.</p>

               <blockquote className="quote">"Memory is like a spiderweb that catches new information. The more it catches, the bigger it grows. And the bigger it grows, the more it catches."</blockquote>
               {/* <p className='indent'>It takes knowledge to learn knowledge. Once you learn concepts in a specific field 
               you can draw parallels when learning different concepts that in turn help you understand new things you learn better. </p> */}
              <p className='indent'>Work in progress...</p>
            </div>
        </Layout>
    )
}

export default Moonwalking;