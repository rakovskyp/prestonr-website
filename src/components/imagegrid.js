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

import junior1 from '../mems/junior-1.jpg'
import junior2 from '../mems/junior-2.jpg'
import junior3 from '../mems/junior-3.jpg'
import junior4 from '../mems/junior-4.png'



import { motion } from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {

    const pictures = [
        highschool1, freshman1, freshman2, freshman3, freshman4, freshman5,
        freshman6, freshman7, sophomore1, sophomore2, junior1, junior2, junior3, junior4
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