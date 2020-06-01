import React from 'react';

import Layout from '../components/layout'
import testphoto from '../images/dellx.png'
import smartMirror from '../images/smartMirrorCov.png'
import websiteScreenshot from '../images/websiteScreenshot.png'
import ct from '../images/ct.png'

const Code = (props) => {
    
    return (
        <Layout>
            <div className='fade-in'>
                <h1 className='title shrink'>code</h1>

                <div className="projectContainer">
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

                    <div className="project">
                            <h3>Chicken Tinder</h3>
                            <p><em>2020</em></p>

                            <img src={ct}></img>
                            <p>Swipe on your local restaurants with a friend – where you match is where you eat! 
                                <em> Work in progress.</em>
                            </p>

                            <span className='skill blue'>React Native</span>
                            {/* <span className='skill gold'>GatsbyJS</span> */}
                            <span className='skill red'>Firebase</span>
                            <span className='skill green'>Google Cloud Platform</span>
                            {/* <span className='skill pink'>GraphQL</span> */}
                    </div>

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
                </div>
            </div>
        </Layout>
    )
}

export default Code;