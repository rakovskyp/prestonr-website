import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Media = props => {
  return (
    <Layout>
      <SEO title="Media" />
      <div className="fade-in">
        <h1 className="title shrink">media recommendations</h1>
        <p>
          The idea of media recommendations are important to me because they
          serve as "resumes" for the values and interests that people have. We
          already have career resumes, like the classic one pager that you apply
          to jobs with, social resumes, like our profiles on instagram, but
          nothing that speaks to ideas that make people unique.
        </p>
        <h3>essays</h3>
        <p></p>

        <a
          className="links"
          href="https://www.theatlantic.com/magazine/archive/2022/03/why-we-are-never-satisfied-happiness/621304/?utm_source=pocket_collection_story"
          target="_blank"
        >
          <h4>How to Want Less</h4>
        </a>
        <ul>
          <li>
            This piece was incredibly moving, beautifully written, and gave
            authentic and real actionable advice on a structure towards moving
            through life.
          </li>
          <li>
            There are hundreds of essays on the concept of hedonic treadmills
            and fulfillment but this is the first one that made me feel truly
            understood. If there is any one essay I recommend to anyone its this
            one.
          </li>
        </ul>

        <a
          className="links"
          href="https://www.theatlantic.com/family/archive/2022/03/chasing-happiness-leads-to-dissatisfaction/629427/?utm_source=pocket_collection_story"
          target="_blank"
        >
          <h4>What the Second-Happiest People Get Right</h4>
        </a>
        <ul>
          <li>
            This really emphasized the true value of taking risks and has helped
            me reframe that feelings of anxiousness are often a sign that I’m
            doing something right.
          </li>
          <li>
            "Some of the most meaningful parts of our lives are a direct result
            of negative feelings that slipped through, despite our best efforts
            to block them out."
          </li>
        </ul>

        <h3>interviews</h3>
        <p></p>
        <a
          className="links"
          href="https://www.theatlantic.com/family/archive/2022/03/chasing-happiness-leads-to-dissatisfaction/629427/?utm_source=pocket_collection_story"
          target="_blank"
        >
          <h4>Chamath Palihapitiya's interview with Lex Fridman</h4>
        </a>

        <ul>
          <li>
            A great interview about Chamath’s humble beginnings with no friends
            and an abusive father to his relationship with his parents and
            friends today. He has an incredible understanding of nuanced the
            world that is incredible to see and he talks about his ideas about
            minimizing mistakes in life and on living a meaningful life.
          </li>
          <li>
            A natural consequence of the people I surround myself with has
            resulted in me feeling pressured to maximize my impact on the world.
            When I find out about the values that a lot of people they generall
            fall into this and so it seem like its supposed to be the “right”
            answer. As a result, I've always felt a little guilty that I
            intrinsically don’t feel like that's what motivates me the most.
            Chamath touches on this point that really speaks to me personally.
            He believes that “if you focus on having to have an impact on the
            world I think you’re going to end up deeply unhappy. It may happen
            as a byproduct, but I think that you should try to find your own
            personal happiness and then measure how that manifests as it relates
            to society and other people, but if the answer to those questions is
            zero, that doesn’t make you less of a person”. This really affiremed
            ot me that having a mission to maximize impact is a recipe for a
            life of general unhappiness because there’s always more impact to be
            had.
          </li>
        </ul>

        <a
          className="links"
          href="https://www.theatlantic.com/family/archive/2022/03/chasing-happiness-leads-to-dissatisfaction/629427/?utm_source=pocket_collection_story"
          target="_blank"
        >
          <h4>Brandon Stanton's interview with Tim Ferris</h4>
        </a>

        <ul>
          <li>
            This is the most authentic interview I’ve ever listened to. Brandon
            talks about his deep feelings of insecurity that he dealt with when
            starting Humans of New York, dispels myths that the media has tried
            to box him into, and demonstrates a level of non-judgement and
            understanding that is truly admirable.
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Media
