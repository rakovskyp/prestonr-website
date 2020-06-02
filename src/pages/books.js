import React from 'react';
import Layout from '../components/layout'
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
            <div className='fade-in'>
              <h1 className='title shrink'>books</h1>
              <p>Here are some of the main ideas and takeaways that I got from the books that I've read.</p>
              <p>Currently reading: How to Win Friends and Influence People by Dale Carnegie </p>
              <StyledLink to='./books/moonwalking'><h4>Moonwalking with Einstein by Joshua Foer</h4></StyledLink>
            </div>
        </Layout>
    )
}

export default Books;