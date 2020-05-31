import React from 'react';

import Layout from '../components/layout'
import testphoto from '../images/dellx.png'

const Code = (props) => {
    
    return (
        <Layout>
            <h1 className='title shrink'>code</h1>

            <div className="projectContainer">
                <div className="project">
                        <h4>Chicken Tinder</h4>
                        <p><em>2020</em></p>
                        
                        <img src={testphoto}></img>
                        <p>Swipe through nearby restaurants with a friend.</p>

                        <span className='skill blue'>React Native</span>
                        <span className='skill red'>Firebase</span>
                        <span className='skill green'>Google Cloud Platform</span>
                        <span className='skill pink'>GraphQL</span>
                </div>

                <div className="project">
                        <h4>Chicken Tinder</h4>
                        <p><em>2020</em></p>

                        <img src={testphoto}></img>
                        <p>Swipe through nearby restaurants with a friend.</p>

                        <span className='skill blue'>React Native</span>
                        <span className='skill red'>Firebase</span>
                        <span className='skill green'>Google Cloud Platform</span>
                        <span className='skill pink'>GraphQL</span>
                </div>
            </div>
        </Layout>
    )
}

export default Code;