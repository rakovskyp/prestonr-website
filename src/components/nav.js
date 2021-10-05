import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';

const StyledLink = styled(props => <Link {...props} />)`
font-size: 16px;
padding: 0 15px;
text-align: center;
text-transform: uppercase;
text-decoration: none;
text-decoration-color: initial;
text-decoration-style: initial;
color: black;
font-family: georgia, serif;
`;

const urlAbout = '/about'
const urlCode = '/code'
const urlMems = '/mems'
const urlContact = '/contact'

const Nav = (props) => {
    return (
        <>
            <StyledLink to={urlAbout}>about</StyledLink>
            <StyledLink to={urlCode}>code</StyledLink>
            <StyledLink to={urlContact}>contact</StyledLink>
            <StyledLink to={urlMems}>mems</StyledLink>
        </>
    )
}

export default Nav;