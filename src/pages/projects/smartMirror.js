import React from "react"
import Layout from "../../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"

import Cover from '../../images/SmartMirror/smNewCover.png'
import PulledApart from '../../images/SmartMirror/smpulledapart.png'
import Diagram from '../../images/SmartMirror/diagram.png'
import Spray from '../../images/SmartMirror/spraypaint.png'
import Final from '../../images/SmartMirror/finalprod.png'

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

const SmartMirror = props => {
  return (
    <Layout>
      <div className="fade-in smart-mirror">
        {/* <h1 className="title shrink">smart mirror</h1> */}
        <StyledLink to="/code">
          <h4>back</h4>
        </StyledLink>
        
        <img src={Cover}></img>
       
        <h3>How it works</h3>

        <img src={PulledApart}></img>
        <p>
        A two-way mirror, commonly known for its use as 
        one-way glass in interrogation rooms, reflects 
        like a normal mirror in the absence of light. 
        However, when white light is pressed directly against 
        the glass, it is able to shine through.
        </p>
        
        <p>
        With this in mind, I developed a software to create the 
        Smart Mirror. Running on a Raspberry Pi, the program displays 
        widgets on a monitor in the form of white text with 
        a black background.
        </p>

        <p>
        By holding the monitor up with wood and running the 
        software behind the mirror and frame, I created 
        a "smart" mirror effect.
        </p>

        <h3>Design Process</h3>

        <p>
        I divided the project into four stages:
        </p>

        <ol>
            <li>Design</li>
            <li>Development</li>
            <li>Woodwork</li>
            <li>Integration</li>
        </ol>

        <h3>1. Design</h3>

        <p>
        I first had to decide what features I wanted to 
        implement into the Smart Mirror. To do this, I 
        listed things that would make my morning more 
        efficient by having all of the information in 
        one place to reference:
        </p>

        <ul>
            <li>Checking the time</li>
            <li>Looking at the weather and temperature outside</li>
            <li>Going through my calendar to see what meetings/events I have for the day</li>
        </ul>

        <p>
        The last thing most people can do in the morning is waste 
        time, as they rush to their first class or to catch the 
        train to their commute. Having all of this information 
        accessible at a quick glance streamlines their mornings 
        exponentially.
        </p>

        <p>
        Using Photoshop, I designed a general outline of 
        what the software would look like, with a 
        rough idea of how it would work.
        </p>

        <img src={Diagram}></img>

        <h3>2. Development</h3>

        <p>
        Initially, I struggled in deciding whether to 
        develop the software in Java or Javascript.
         I decided on Javascript because the front end 
         of this application would be more smoothly 
         designed with HTML and CSS in a locally 
         hosted browser. Additionally, the front 
         end would be much easier and more versatile in 
         terms of design.
        </p>

        <p>
        The application would run on my Raspberry Pi's Raspbian OS.
        </p>

        <p>
        To generate the weather data, I fetch JSON data from a 
        weather API, known as Dark Sky API. In my Javascript 
        code, I parse the JSON data into an invisible table 
        that is displayed on the right side of my mirror.
        </p>

        <h3>3. Woodwork</h3>

        <p>In order to maintain the mirror look, I had 
            to make two frames: one for the inside and one 
            for the outside
        </p>

        <p>
        The outside frame was the front frame that was visibile to 
        everyone. This was to emulate the actual mirror frame 
        appearance.
        </p>

        <p>
        The inside frame was hidden and its purpose was to hold the mirror in place.
        </p>

        <img src={Spray}></img>

        <p>
        After gluing and nailing the wood together, I spray-painted the frame black, as seen in the above picture.
        </p>

        <p>
        I then glued a blackout curtain to the bottom half of 
        the frame to ensure that, in the case of leakage of 
        light from the monitor, the mirror would still remain 
        perfectly reflective.
        </p>

        <h3>4. Integration</h3>

        <p>In order to bring the "magic" to the mirror, 
            I had to actually install the Raspberry Pi into 
            the mirror.
        </p>

        <p>
        I plugged in the necessary wires and connected everything. 
        However, one issue I ran into was that the Raspberry Pi 
        was very processor dependent, so it would overheat a 
        few minutes after running. To fix this, I installed a 
        heat sinks on the processor.
        </p>

        <img src={Final}></img>

        <p>
        Overall, I am thrilled with the end result of the Smart Mirror. 
        I have not experienced any glitches with it, and I use it 
        every day. Additionally, I accomplished all the goals I set 
        out to, namely utilizing my newfound programming skills, 
        following through and sticking with a project to completion, 
        and contributing a great piece of furniture to my college 
        living room!
        </p>

        <p>
        In the future, I would like to consider implementing a 
        motion sensor for the mirror to turn on whenever I walk by. 
        I would also like to possibly integrate the abilities of 
        Amazon Alexa into the Smart Mirror as well.
        </p>

      </div>
    </Layout>
  )
}

export default SmartMirror
