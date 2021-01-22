import React from 'react';

import Layout from '../components/layout'
import Job from '../components/job'
import SEO from '../components/seo'

import logoING from '../images/ing.png'
import logoDell from '../images/dell.png'
import logoPolo from '../images/poloniex.png'

const About = (props) => {

    const jobs = [ 
        {
            place: 'ING Bank',
            position: 'IT Development Solutions Intern',
            logo: logoING,
            link: 'https://www.ing.com/Home.htm',
            start: 'may 2019',
            end: 'aug 2019'
        },
        {
            place: 'Dell',
            position: 'Software Engineer Intern',
            logo: logoDell,
            link: 'https://www.dell.com/en-us',
            start: 'jun 2020',
            end: 'jul 2020'
        },
        {
            place: 'Poloniex',
            position: 'Software Engineer Co-op',
            logo: logoPolo,
            link: 'https://poloniex.com/',
            start: 'aug 2020',
            end: 'dec 2020'
        }
    ]

    const [age, setAge] = React.useState(0);

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
        const birthTime = new Date('2000-10-09T01:17:00');
        setAge(((Date.now() - birthTime) / divisor).toFixed(11));
        
    };

    React.useEffect(() => {
        const timer = setInterval(() => tick(), 25);
        return () => { clearInterval(timer); };
    }, []);


    return (
        
        <Layout>
        <SEO title="About" />
        <div className='fade-in'>
            <h1 className='title shrink'>about</h1>

            <p>I'm Preston Rakovsky. </p>

            <p> I'm a Computer Science and Business major at Northeastern University. 

                In my spare time, I really love to build things, work out, read, and hear your controversial opinions.

                If I'm passionate about anything, it's learning. Whether through books, computer science projects, or friends – I'm 
                constantly learning and growing in one way or another.
            </p>
            
            <p>Stats: </p>
            <ul>
                <li>Favorite show: Bojack Horseman</li>
                <li>Favorite food: Sushi</li>
                <li>Go to drink: Peach Snapple Iced Tea</li>
                <li>Current age: {age}</li>
                <li>Location: Boston, MA</li>
            </ul>

            <p>
                Previously worked at:
            </p>

            <table>
             {jobs.map((job, i) => <Job key={i} job={job} id={i}/>).reverse()}
            </table>
        </div>
        </Layout>
    )
}

export default About;