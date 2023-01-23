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
          I'm a big believer in media recommendations as a proxy for values and
          interests. The media we consume and advocate for reflect the ideas
          that are worth thinking about. Below is a list of essays, interviews,
          short stories, and videos that resonate the most with me.
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
            “It is the suffering that we choose that affords the most
            opportunity for pleasure, meaning, and personal growth.”
          </li>
        </ul>

        <h3>interviews</h3>
        <p></p>
        <a
          className="links"
          href="https://www.youtube.com/watch?v=kFQUDCgMjRc"
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
            zero, that doesn’t make you less of a person”. This really affirmed
            to me that having a mission to maximize impact is a recipe for a
            life of general unhappiness because there’s always more impact to be
            had.
          </li>
        </ul>

        <a
          className="links"
          href="https://tim.blog/2018/06/18/brandon-stanton-humans-of-new-york/"
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
        <h3>short stories</h3>
        <p></p>

        <a
          className="links"
          href="https://www.e-reading.life/bookreader.php/1048692/Chiang_-_Liking_What_You_See__A_Documentary.html"
          target="_blank"
        >
          <h4>Liking What You See by Ted Chiang</h4>
        </a>
        <ul>
          <li>
            Thought provoking ideas on what could realistically happen if we
            tried to remove beauty from soceity using a technology called
            Calliagnosia (dubbed "calli").
          </li>
          <li>
            Chiang does a phenomenal job at explaining different perspectives
            and nuances that would arise from implementing calli. Started out
            definitely pro-calli but had to rethink my stance after they shared
            some perspectives
          </li>
        </ul>

        <h3>videos</h3>
        <p></p>

        <a
          className="links"
          href="https://www.youtube.com/watch?v=pnGxNUtZ_a4"
          target="_blank"
        >
          <h4>consuming content to make my brain go quiet</h4>
        </a>
        <ul>
          <li>
            Ironic video about how the vast majority of content we consume is
            brainless and serves to distract ourselves.
          </li>
          <li>
            There's arguments to be made about the benefit of mindlessly
            scrolling instagram, tiktok, reddit, twitter, etc., but the reality
            is that most of us are using these platforms as a pacifier to turn
            our brains off. The trade off is immediate short-term comfort at the
            cost of introspection.
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Media