import React from 'react'

import ProjectCard from './ProjectCard'
import projectData from '../data/projectData'

import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .25,
            duration: 1.5
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const Projects = () => {
    return (
        <motion.div className='Project'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            {projectData.map(card => <ProjectCard key={card.id} card={card} />)}
        </motion.div>
    )
}

export default Projects