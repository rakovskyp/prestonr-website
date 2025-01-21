import React from "react"

import Layout from "../components/layout"
import Job from "../components/job"
import SEO from "../components/seo"

import logoING from "../images/ing.png"
import logoDell from "../images/dell.png"
import logoPolo from "../images/polo_logo.jpeg"
import logoDatadog from "../images/datadog_logo3.jpeg"
import logoNoom from "../images/noom_logo.png"

const About = props => {
  const jobs = [
    {
      place: "ING Bank",
      position: "IT Development Solutions Intern @ ING",
      logo: logoING,
      link: "https://www.ing.com/Home.htm",
      start: "may 2019",
      end: "aug 2019",
    },
    {
      place: "Dell",
      position: "Software Engineer Intern @ Dell",
      logo: logoDell,
      link: "https://www.dell.com/en-us",
      start: "jun 2020",
      end: "jul 2020",
    },
    {
      place: "Poloniex",
      position: "Software Engineer Intern @ Poloniex",
      logo: logoPolo,
      link: "https://poloniex.com/",
      start: "aug 2020",
      end: "dec 2020",
    },
    {
      place: "Datadog",
      position: "Software Engineer Intern @ Datadog",
      link: "https://www.datadoghq.com/",
      logo: logoDatadog,
      start: "may 2021",
      end: "dec 2021",
    },
    {
      place: "Noom",
      position: "Software Engineer Intern @ Noom",
      link: "https://www.noom.com/",
      logo: logoNoom,
      start: "june 2022",
      end: "aug 2022",
    },
    {
      place: "Datadog",
      position: "Software Engineer 2",
      link: "https://www.datadog.com/",
      logo: logoDatadog,
      start: "feb 2022",
      end: "present",
    },
  ]

  const [age, setAge] = React.useState(0)

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897 // ms in an average year
    const birthTime = new Date("2000-10-09T01:17:00")
    setAge(((Date.now() - birthTime) / divisor).toFixed(11))
  }

  React.useEffect(() => {
    const timer = setInterval(() => tick(), 25)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Layout>
      <SEO title="About" />
      <div className="fade-in">
        <h1 className="title shrink">about</h1>

        <p>I'm Preston. </p>

        <p>
          {" "}
          I believe the world is a more beautiful place when people are more vulnerable so I make <a className="links" href="https://www.instagram.com/prestonrack/">
            videos
          </a> about that.
        </p>

        <p>
          Here's my{" "}
          <a
            className="links"
            href="https://www.linkedin.com/in/rakovskypreston/"
            target="_blank"
          >
            {" "}
            LinkedIn
          </a>
          ,{" "}
          <a
            className="links"
            href="https://github.com/rakovskyp"
            target="_blank"
          >
            Github
          </a>
          , and{" "}
        </p>

        <p>Stats: </p>
        <ul>
          <li>
            Favorite book: Someone Who Will Love You in All Your Damaged Glory by Raphael Bob-Waksberg{" "}
            <strike>The Alchemist by Paulo Coelho</strike>{" "}
            <strike>We Learn Nothing by Tim Kreider</strike>{" "}
            <strike>Moonwalking with Einstein by Joshua Foer</strike>
          </li>
          <li>
            Go to drink: Water with ice <strike>English Breakfast Tea</strike>{" "}
            <strike>Peach Snapple Iced Tea</strike>
          {/* </li> */}
          {/* <li>Current age: {age}</li> */}
          {/* <li> */}
            Location: New York, NY <strike>San Francisco, CA</strike>{" "} <strike>Los Angeles, CA</strike>{" "}
            <strike>Boston, MA</strike> <strike>Rockville Centre, NY</strike>
          </li>
          <li>Places lived: 5</li>
          <li>Emails from JetBlue: 630</li>
          <li>Conversations with strangers: 212</li>
          <li>Pieces of sushi eaten: 624</li>
          <li>Minutes of my life spent watching Bojack Horseman: 2146</li>
          <li>Times snowboarded: 24</li>
          <li>Unique thoughts had: 0</li>
        </ul>

        <p>Previously worked at:</p>

        <table>
          {jobs.map((job, i) => <Job key={i} job={job} id={i} />).reverse()}
        </table>
      </div>
    </Layout>
  )
}

export default About
