import React from 'react';


import highschool1 from '../mems/highschool-1.jpg'

import freshman1 from '../mems/freshman-1.jpg'
import freshman2 from '../mems/freshman-2.jpg'
import freshman3 from '../mems/freshman-3.jpg'
import freshman4 from '../mems/freshman-4.jpg'
import freshman5 from '../mems/freshman-5.jpg'
import freshman6 from '../mems/freshman-6.jpg'
import freshman7 from '../mems/freshman-7.jpg'

import sophomore1 from '../mems/sophomore-1.jpg'
import sophomore2 from '../mems/sophomore-2.jpg'

import junior2 from '../mems/junior-2.jpg'
import junior3 from '../mems/junior-3.jpg'
import junior4 from '../mems/junior-4.png'
import junior5 from '../mems/junior-5.png'
import junior6 from '../mems/junior-6.png'
import junior7 from '../mems/junior-7.png'
import junior8 from '../mems/junior-8.jpg'
import junior9 from '../mems/junior-9.png'
import junior10 from '../mems/junior-10.jpg'
import junior11 from '../mems/junior-11.png'

import hawaii0 from '../mems/hawaii-0.png'
import hawaii1 from '../mems/hawaii-1.png'
import hawaii2 from '../mems/hawaii-2.png'
import hawaii3 from '../mems/hawaii-3.png'
import hawaii4 from '../mems/hawaii-4.png'
import hawaii5 from '../mems/hawaii-5.png'
import hawaii6 from '../mems/hawaii-6.png'
import hawaii7 from '../mems/hawaii-7.png'

import senior1 from '../mems/senior-1.png'
import senior2 from '../mems/senior-2.png'
import senior3 from '../mems/senior-3.png'
import senior4 from '../mems/senior-4.png'
import senior5 from '../mems/senior-5.png'
import senior6 from '../mems/senior-6.jpg'
import senior7 from '../mems/senior-7.png'
import senior8 from '../mems/senior-8.png'

import { motion } from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {

    const pictures = [
        highschool1, freshman1, freshman2, freshman3, freshman4, freshman5, freshman6, freshman7, 
        sophomore1, sophomore2, 
        junior2, junior3, junior4, junior5, junior6, junior7, junior8, junior9, junior10, junior11,
        hawaii0, hawaii1, hawaii2, hawaii3, hawaii4, hawaii5, hawaii6, hawaii7,
        senior1, senior2, senior3, senior4, senior5, senior6, senior7, senior8
    ].reverse()

    return (
            <div className="img-grid">
                {pictures.map(pic => (
                    
                    <motion.div className="img-wrap"
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(pic)}
                    >
                        <motion.img src={pic} alt="pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0 }}
                        />
                    </motion.div>
                ))}
            </div>
    )
}

export default ImageGrid;