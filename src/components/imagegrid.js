import React from "react"

import highschool1 from "../mems/highschool-1.jpg"

import freshman1 from "../mems/freshman-1.jpg"
import freshman2 from "../mems/freshman-2.jpg"
import freshman3 from "../mems/freshman-3.jpg"
import freshman4 from "../mems/freshman-4.jpg"
import freshman5 from "../mems/freshman-5.jpg"
import freshman6 from "../mems/freshman-6.jpg"
import freshman7 from "../mems/freshman-7.jpg"

import sophomore1 from "../mems/sophomore-1.jpg"
import sophomore2 from "../mems/sophomore-2.jpg"

import junior3 from "../mems/junior-3.jpg"
import junior4 from "../mems/junior-4.png"
import junior5 from "../mems/junior-5.png"
import junior6 from "../mems/junior-6.png"
import junior7 from "../mems/junior-7.png"
import junior8 from "../mems/junior-8.jpg"
import junior9 from "../mems/junior-9.png"
import junior10 from "../mems/junior-10.jpg"
import junior11 from "../mems/junior-11.png"

import hawaii0 from "../mems/hawaii-0.png"
import hawaii1 from "../mems/hawaii-1.png"
import hawaii2 from "../mems/hawaii-2.png"
import hawaii3 from "../mems/hawaii-3.png"
import hawaii4 from "../mems/hawaii-4.png"
import hawaii5 from "../mems/hawaii-5.png"
import hawaii6 from "../mems/hawaii-6.png"
import hawaii7 from "../mems/hawaii-7.png"

import senior1 from "../mems/senior-1.png"
import senior2 from "../mems/senior-2.png"
import senior3 from "../mems/senior-3.png"
import senior4 from "../mems/senior-4.png"
import senior5 from "../mems/senior-5.png"
import senior6 from "../mems/senior-6.jpg"
import senior7 from "../mems/senior-7.png"
import senior8 from "../mems/senior-8.png"
import senior9 from "../mems/senior-9.png"
import senior10 from "../mems/senior-10.jpg"

import dd from "../mems/dd.jpg"
import sf1 from "../mems/sf1.jpg"
import vegas1 from "../mems/vegas1.png"
import vegas2 from "../mems/vegas2.png"
import snakehips0 from "../mems/snakehips0.png"
import snakehips1 from "../mems/snakehips1.jpg"
import snakehips2 from "../mems/snakehips2.png"
import skitrip1 from "../mems/skitrip1.jpg"
import skitrip2 from "../mems/skitrip2.jpg"
import skitrip3 from "../mems/skitrip3.png"
import skitrip4 from "../mems/skitrip4.png"
import skitrip5 from "../mems/skitrip5.png"

import april2022_1 from "../mems/2022-april/april-1.png"
import april2022_2 from "../mems/2022-april/april-2.png"
import april2022_3 from "../mems/2022-april/april-3.png"

import may2022_1 from "../mems/2022-may/may-1.png"
import may2022_2 from "../mems/2022-may/may-2.png"
import may2022_3 from "../mems/2022-may/may-3.png"
import may2022_4 from "../mems/2022-may/may-4.png"

import june2022_1 from "../mems/2022-june/june-1.png"
import june2022_2 from "../mems/2022-june/june-2.png"
import june2022_3 from "../mems/2022-june/june-3.png"
import june2022_4 from "../mems/2022-june/june-4.png"
import june2022_5 from "../mems/2022-june/june-5.png"
import june2022_6 from "../mems/2022-june/june-6.png"
import june2022_7 from "../mems/2022-june/june-7.png"
import june2022_8 from "../mems/2022-june/june-8.png"

import july2022_1 from "../mems/2022-july/july-1.png"
import july2022_2 from "../mems/2022-july/july-2.png"
import july2022_3 from "../mems/2022-july/july-3.png"
import july2022_4 from "../mems/2022-july/july-4.png"

import august2022_1 from "../mems/2022-august/august-1.png"
import august2022_2 from "../mems/2022-august/august-2.png"
import august2022_3 from "../mems/2022-august/august-3.png"
import august2022_4 from "../mems/2022-august/august-4.png"

import september2022_1 from "../mems/2022-september/september-1.png"
import september2022_2 from "../mems/2022-september/september-2.png"
import september2022_3 from "../mems/2022-september/september-3.png"

import october2022_1 from "../mems/2022-october/october-1.png"
import october2022_2 from "../mems/2022-october/october-2.png"

import november2022_1 from "../mems/2022-november/november-1.png"

import { motion } from "framer-motion"

const ImageGrid = ({ setSelectedImg }) => {
  const pictures = [
    highschool1,
    freshman1,
    freshman2,
    freshman3,
    freshman4,
    freshman5,
    freshman6,
    freshman7,
    sophomore1,
    sophomore2,
    junior3,
    junior4,
    junior5,
    junior6,
    junior7,
    junior8,
    junior9,
    junior10,
    junior11,
    hawaii0,
    hawaii1,
    hawaii2,
    hawaii3,
    hawaii4,
    hawaii5,
    hawaii6,
    hawaii7,
    senior1,
    senior2,
    senior3,
    senior4,
    senior5,
    senior6,
    senior7,
    senior8,
    senior9,
    senior10,
    dd,
    sf1,
    vegas1,
    vegas2,
    snakehips0,
    snakehips1,
    snakehips2,
    skitrip1,
    skitrip2,
    skitrip3,
    skitrip4,
    skitrip5,
    april2022_1,
    april2022_2,
    april2022_3,
    may2022_1,
    may2022_2,
    may2022_3,
    may2022_4,
    june2022_1,
    june2022_2,
    june2022_3,
    june2022_4,
    june2022_5,
    june2022_6,
    june2022_7,
    june2022_8,
    july2022_1,
    july2022_2,
    july2022_3,
    july2022_4,
    august2022_1,
    august2022_2,
    august2022_3,
    august2022_4,
    september2022_1,
    september2022_2,
    september2022_3,
    october2022_1,
    october2022_2,
    november2022_1,
  ].reverse()

  return (
    <div className="img-grid">
      {pictures.map(pic => (
        <motion.div
          className="img-wrap"
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(pic)}
        >
          <motion.img
            src={pic}
            alt="pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid
