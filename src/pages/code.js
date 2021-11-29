import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

import Layout from '../components/layout'
import SEO from '../components/seo'
import smartMirror from '../images/smartMirrorCov.png'
import websiteScreenshot from '../images/websiteScreenshot.png'
import pipeline from '../images/pipeline.jpeg'
import pipelineNoText from '../images/pipelineNoText.jpeg'
import ct from '../images/ct.png'
import booksGif from '../images/booksGif.gif'

const StyledLink = styled(props => <Link {...props} />)`
text-decoration: none;
text-decoration-color: initial;
text-decoration-style: initial;
color: black;
font-family: georgia, serif;
`;


const Code = (props) => {
    
    return (
        <Layout>
            <SEO title="Code" />
            <div className='fade-in'>
                <h1 className='title shrink'>code</h1>

                <div className="projectContainer">

                    <StyledLink to='/papers/chickentinder'>
                    <div className="project">
                        <h3>Chicken Tinder</h3>
                        <p><em>2021</em></p>

                        <img src={ct}></img>
                        <p>Swipe on your local restaurants with a friend – where you match is where you eat! 
                            <em>Click here to meet</em>
                        </p>

                        <span className='skill blue'>React Native</span>
                        <span className='skill red'>Firebase</span>
                        <span className='skill green'>Google Cloud Platform</span>
                    </div>
                    </StyledLink>

                    <StyledLink to='/projects/smartMirror'>
                    <div className="project">
                            <h3>Smart Mirror</h3>
                            <p><em>2019</em></p>
                            
                            <img src={smartMirror}></img>
                            <p>A mirror that displays the current weather,
                                forecast, time, date, and is synced with your
                                Google Calendar. 
                            </p>

                            {/* <span className='skill blue'>React Native</span>
                            <span className='skill red'>Firebase</span>
                            <span className='skill green'>Google Cloud Platform</span>
                            <span className='skill pink'>GraphQL</span> */}
                            <span className='skill purple'>Javascript</span>
                    </div>
                    </StyledLink>
                    <a href={pipelineNoText} target='_blank'>
                        <div className="project">
                                <h3>Analytics Pipeline & Dashboard</h3>
                                <p><em>2021</em></p>

                                <img src={pipeline}></img>
                                <p>Automated ETL Spark pipeline for transferring and querying Google Analytics data into Tableau dashboard.</p>

                                <span className='skill blue'>Spark</span>
                                <span className='skill gray'>SQL</span>
                                <span className='skill red'>EC2</span>
                                <span className='skill gold'>EMR</span>
                                <span className='skill pink'>S3</span>
                                <span className='skill gray'>Python</span>
                        </div>
                    </a>
                    <a href='https://github.com/rakovskyp/prestonr-website' target='_blank'>
                        <div className="project">
                                <h3>Personal Website</h3>
                                <p><em>2020</em></p>

                                <img src={websiteScreenshot}></img>
                                <p>This website that I made when I was bored in quarantine.</p>

                                <span className='skill blue'>React</span>
                                <span className='skill gold'>GatsbyJS</span>
                                {/* <span className='skill red'>Firebase</span> */}
                                {/* <span className='skill green'>Google Cloud Platform</span> */}
                                {/* <span className='skill pink'>GraphQL</span> */}
                        </div>
                    </a>
                    <a href='https://github.com/rakovskyp/graphql-reading-list' target='_blank'>
                        <div className="project">
                                    <h3>GraphQL Reading List</h3>
                                    <p><em>2020</em></p>

                                    <img src={booksGif}></img>
                                    <p>Reading list I made backed by MongoDB which utilized 
                                        GraphQL queries to send and alter data.</p>

                                    <span className='skill blue'>React</span>
                                    {/* <span className='skill gold'>GatsbyJS</span> */}
                                    {/* <span className='skill red'>Firebase</span> */}
                                    <span className='skill pink'>GraphQL</span>
                                    <span className='skill gray'>mongoDB</span>
                        </div>
                    </a>
                </div>
                
            </div>
        </Layout>
    )
}

export default Code;