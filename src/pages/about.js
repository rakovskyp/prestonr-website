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

        <p>I'm Preston Rakovsky. </p>

        <p>
          {" "}
          I'm a Computer Science and Business graduate from Northeastern
          University. In my spare time, I'm really interested in building
          things, working out, and reading. If I'm passionate about anything,
          it's learning. Whether through books, computer science projects, or
          friends – I'm constantly learning and growing in one way or another.
        </p>

        <p>Stats: </p>
        <ul>
          <li>
            Favorite book: The Alchemist by Paulo Coelho{" "}
            <strike>We Learn Nothing by Tim Kreider</strike>{" "}
            <strike>Moonwalking with Einstein by Joshua Foer</strike>
          </li>
          <li>
            Go to drink: Water with ice <strike>English Breakfast Tea</strike>{" "}
            <strike>Peach Snapple Iced Tea</strike>
          </li>
          <li>Current age: {age}</li>
          <li>
            Location: San Francisco, CA <strike>Los Angeles, CA</strike>{" "}
            <strike>Boston, MA</strike> <strike>Rockville Centre, NY</strike>
          </li>
          <li>Places lived: 4</li>
          <li>Emails from Jet Blue: 618</li>
          <li>Conversations with strangers: 49</li>
          <li>Pieces of sushi eaten: 610</li>
          <li>Minutes of my life spent watching Bojack Horseman: 2146</li>
          <li>Times snowboarded: 14</li>
          <li>Unique thoughts had: 0</li>
        </ul>

        <div className="changelog">
          <p>Last updated: November 26th, 2022 </p>
          <ul>
            <li>40 minutes watching bojack horseman</li>
            <li>1 place lived</li>
            <li>162 jetblue emails</li>
            <li>17 conversations with strangers</li>
            <li>63 pieces of sushi</li>
          </ul>
        </div>

        <p>Previously worked at:</p>

        <table>
          {jobs.map((job, i) => <Job key={i} job={job} id={i} />).reverse()}
        </table>
      </div>
    </Layout>
  )
}

export default About
