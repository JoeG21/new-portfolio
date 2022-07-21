import React from 'react'

import ProjectCard from './ProjectCard'
import projectData from '../data/projectData'

const Projects = () => {
    return (
        <div className='Project'>
            {projectData.map(card => <ProjectCard key={card.id} card={card} />)}
        </div>
    )
}

export default Projects