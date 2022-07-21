import React from 'react'
import { useState } from 'react'

import gitHub from '../pictures/svg/github.svg'
import wwwLogo from '../pictures/svg/wwwLogo.svg'


const ProjectCard = (props) => {
    const [expand, setExpand] = useState(false)

    const handClick = () => {
        setExpand(prevState => !prevState)
    }

    const justRepo = (
        <a href={props.card.repo} alt='GitHub Repo'>
            Repository
            <img src={gitHub} className='repo' alt='GitHub Logo' />
        </a>
    )

    const repoWeb = (
        <div className='repo-btn'>
            <a href={props.card.repo} alt='GitHub Repo'>
                Repository
                <img src={gitHub} className='repo' alt='GitHub Logo' />
            </a>

            <a href={props.card.website} alt='GitHub Repo'>
                Website
                <img src={wwwLogo} className='repo' alt='Website Logo' />
            </a>
        </div>
    )

    const halfCard = (
        <div className='half-project-card' onClick={() => handClick()}>
            <img src={props.card.photo} className='pic-vid-project' alt='Full Project' />

            <div className='test-ti'>
                {props.card.id <= 3 ?
                    props.card.title
                    :
                    <img src={props.card.title} className='project-title' alt='Project Title' />
                }
            </div>
        </div>
    )

    const fullCard = (
        <div className='full-project-card' onClick={() => handClick()}>
            <iframe src={props.card.video} title='Project' className='pic-vid-project' frameBorder='0' allowFullScreen />

            <div className='test-ti'>
                {props.card.id <= 3 ?
                    props.card.title
                    :
                    <img src={props.card.title} className='project-title' alt='Project Title' />
                }
            </div>


            <div className='project-des'>
                <p>
                    {props.card.des}
                </p>

                <div className='tech-stack'>
                    <h2> Tech Stack </h2>
                    <ul>
                        {props.card.tech.map(t => <img key={t} src={t} className='tech-logo' alt='Tech Stack' />)}
                    </ul>
                </div>

                {props.card.id === 2 ? repoWeb : justRepo}

                {/* <div className='repo-btn'>
                    <a href={props.card.repo} alt='GitHub Repo'>
                        Repository
                        <img src={gitHub} className='repo' alt='GitHub Logo' />
                    </a>

                    <a href={props.card.repo} alt='GitHub Repo'>
                        Repository
                        <img src={gitHub} className='repo' alt='GitHub Logo' />
                    </a>
                </div> */}
            </div>
        </div>
    )





    return (
        <>
            {expand === false ? halfCard : fullCard}
        </>
    )
}

export default ProjectCard