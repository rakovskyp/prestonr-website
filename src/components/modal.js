import React from 'react'
import { motion } from 'framer-motion'

const Modal = (props) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            props.setSelectedImg(null)
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
            <motion.img src={props.selectedImg}
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{
               type: "spring",
               stiffness: 260,
               damping: 20
             }}
            />
        </motion.div>
    )
}

export default Modal