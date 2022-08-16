import React from 'react';

import About from './About'

import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.5
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const Home = () => {
    return (
        <>
            <motion.div className='home'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <h1> Full Stack </h1>
                <h1> Web Developer </h1>
            </motion.div>

            <motion.div id='about'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <About />
            </motion.div>
        </>
    )
}

export default Home
