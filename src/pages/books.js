import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from "styled-components";
import { Link } from 'gatsby';

const StyledLink = styled(props => <Link {...props} />)`
text-decoration: none;
text-decoration-color: initial;
text-decoration-style: initial;
color: black;
font-family: georgia, serif;
`;

const Books = (props) => {
    return (
        <Layout>
            <SEO title="Books" />
            <div className='fade-in'>
              <h1 className='title shrink'>books</h1>
              <p>Here are some of the main ideas and takeaways that I took from several books that I've read.
                  A lot of these can come off like common sense, but I think a lot of times what generally 
                  seems intuitive and obvious tends to be overlooked and is just easy to forget so
                  it's helpful to have a little reminder.
              </p>
              <p>Currently reading: How to Win Friends and Influence People by Dale Carnegie </p>
              <StyledLink to='./books/moonwalking'><h4>Moonwalking with Einstein by Joshua Foer</h4></StyledLink>
              <StyledLink to='./books/stumbling'><h4>Stumbling on Happiness by Daniel Gilbert</h4></StyledLink>
            </div>
        </Layout>
    )
}

export default Books;