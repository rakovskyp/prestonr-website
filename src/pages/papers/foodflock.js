import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

import ctLogo from "../../images/chicken-tinder-logo.png"
import ctMock from "../../images/foodFlockMock.jpeg"
import ctDemo from "../../images/CTDemo.gif"

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

const FoodFlock = props => {
  return (
    <Layout>
      <SEO title="Food Flock" />
      <div className="fade-in">
        <h1 className="title shrink">food flock (formerly chicken tinder)</h1>

        <StyledLink to="/code">
          <h4>back</h4>
        </StyledLink>

        <img className="ctLogo" src={ctLogo} alt="Chicken Tinder Logo" />

        <h2>mission statement</h2>
        <p>
          Our mission is to help couples discover great dining experiences at
          local restaurants without “where do you want to go?” ever being a
          question. In eliminating this classic argument over where to eat, we
          set out to bring novelty to relationships through food and the dining
          experience, and ultimately bring people together.
        </p>

        <h2>product</h2>
        <p>
          The Food Flock app combines an engaging, intuitive card deck user
          interface with local restaurant information to help couples make
          better decisions on where to eat. Using Grubhub’s low latency API,
          Food Flock is able to pull robust information about nearby
          restaurants, including cuisine, menus, photos, reviews and ratings.
          This data is used to construct a “card” featuring all of the relevant
          data. Couples (2+ people) can swipe through a collection of these
          cards, until all individuals swipe right, or “match”, on the same
          restaurant.
        </p>

        <h2>the restaurant market opportunity</h2>

        <p>
          Food is an essential, social and enjoyable aspect of everyday life.
          However, many people do not have the time to cook at home and often
          get bored with their unvaried selection of meals. Restaurants offer
          both a fast and convenient dining experience and an exciting reprieve
          to the tedium of home cooking. With the anticipated re-opening of the
          United States economy, combined with the rapid increase in vaccine
          distribution, market research shows a large increase in couples
          looking to discover and try new foods.
        </p>

        <h2>market research</h2>

        <p>
          In a survey conducted by OnePoll on behalf of Panera Bread consisting
          of over 2,000 Americans showed that “the most contentious subject
          between partners is actually what to have for dinner”. Furthermore,
          the fight about food is what 37% of couples said they experienced the
          most compared to any other fight. This suggests that couples would be
          interested in using an app that mitigates fighting.
        </p>

        <p>
          In addition to the frequency at which fights occur over food, the
          OnePoll study also found that when they do occur they are long and
          onerous. The study found that discussions over where to eat typically
          last about 17 minutes. This decision time is significantly longer than
          the average 2 minutes and 46 seconds determined in early alpha testing
          of Food Flock. Thus, using our app saves consumers a tremendous amount
          of time.
        </p>

        <p>
          As the COVID-19 pandemic comes to an end, market research suggests
          dining out and food ordering services are going to be in high demand.
          One study performed by researchers at Oracle found that 65% of
          Generation Z consumers and 66% of Millennial consumers plan to dine
          out immediately or soon after America relaxes their covid
          restrictions. This shows that our app will be entering the market at
          an excellent time; many young consumers will be interested in dining
          out at exactly the same time our app plans to be released. Another
          finding from the same study also found that “40% of all consumers
          prefer the option to view menus and place orders from their devices.”
          This indicates that there will be a large amount of consumer interest
          in apps similar to ours which centralize and streamline the menu data
          viewing process.
        </p>

        <h2>current state & mockup</h2>

        <img src={ctMock} alt="Food Flock Mockup" />

        <h2>demo</h2>

        <img className="ctDemo" src={ctDemo} alt="Chicken Tinder Demo" />
        <h2>swot analysis</h2>

        <h4>strengths</h4>
        <ul>
          <li>
            Our app will aggregate in depth restaurant data like price range,
            stars, hours, cuisine, and restaurant data items in our gamified
            swiping app.
          </li>
          <li>
            Our app will feature significantly more data in a more intuitive,
            well-designed format than our competitors{" "}
          </li>
          <li>
            Swiping is a well-known app interface for our target market and will
            expose users to a large range of restaurants in an effective manner.
          </li>
        </ul>
        <h4>weakness</h4>

        <ul>
          <li>
            “Tinder” is copyrighted and we could potentially run into branding
            issues using that name. However, starting out with the name “Chicken
            Tinder” is part of our branding plan to grab the attention of the
            demographic of 18 - 26 year olds. We are prepared to change the name
            if requested.
          </li>
          <li>
            Currently there is little awareness about our app because we have
            not started advertising efforts yet{" "}
          </li>
        </ul>

        <h4>opportunities</h4>

        <ul>
          <li>
            With the current vaccine distribution rate and the economy reopening
            in the coming months, market research predicts a large increase in
            people going out to restaurants. We plan on leveraging this by
            timing our app release when the United States officially reopens.
          </li>
        </ul>

        <h4>threats</h4>

        <ul>
          <li>
            Similar apps exist on the Apple App Store, but they suffer from a
            lack of valuable restaurant information (i.e. menu data), effective
            UI design, and distinctive branding.
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default FoodFlock
