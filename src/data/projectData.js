// Full Photo of Project
import React from 'react';
import fullAstra from '../pictures/fullAstra.png'
import fullVal from '../pictures/fullVal.png'
import fullLK from '../pictures/fullLK.png'
import fullQNK from '../pictures/fullQNK.png'
import fullJP from '../pictures/fullJP.png'

// Project Logo
import logo from '../pictures/logo.png'
import astra from '../pictures/astra.png'
import val from '../pictures/val.png'
import lk from '../pictures/lKeeper.png'
import qnk from '../pictures/qNK.png'
import jmakon from '../pictures/jmakon.png'

// Tech
import javaScript from '../pictures/svg/javascript.svg'
import jQuery from '../pictures/svg/jquery.svg'
import react from '../pictures/svg/react.svg'
import ruby from '../pictures/svg/ruby.svg'
import rails from '../pictures/svg/rubyonrails.svg'
import boot from '../pictures/svg/bootstrap.svg'
import netlify from '../pictures/svg/netlify.svg'
import material from '../pictures/svg/material-ui.svg'
import html from '../pictures/svg/html5.svg'
import css from '../pictures/svg/css3.svg'
import framer from '../pictures/svg/framerMotion.svg'

const projectCards = [
    {
        id: 1,
        photo: fullAstra,
        video: 'https://youtube.com/embed/oBZM17t8B1A',
        title: <img src={logo} className='project-title-mar' alt='Project Title' />,
        des: 'Created with JavaScript and React. Utilizing hooks, Email.js to establish communication through contact form for customers, and designed with CSS and Material-UI. Implemented Media Queries for responsiveness to all screen sizes and hosted by Netlify.',
        tech: [javaScript, react, material, framer, netlify, html, css],
        repo: 'https://github.com/JoeG21/joecgomez-website'
    },
    {
        id: 2,
        photo: fullAstra,
        video: 'https://youtube.com/embed/oBZM17t8B1A',
        title: <img src={astra} className='project-title-mar' alt='Project Title' />,
        des: 'Created with JavaScript and React. Utilizing hooks, Email.js to establish communication through contact form for customers, and designed with CSS and Material-UI. Implemented Media Queries for responsiveness to all screen sizes and hosted by Netlify.',
        website: 'https://www.astrascapes.com/',
        tech: [javaScript, react, material, netlify, html, css],
        // tech: ['JavaScript', 'React.js', 'Material-UI', 'Email.js'],
        repo: 'https://github.com/Tneebs/astrascapes_website'
    },
    {
        id: 3,
        photo: fullVal,
        video: 'https://www.youtube.com/embed/tDWL4dkzYEI',
        title: <img src={val} className='project-title-mar' alt='Project Title' />,
        des: 'If you want to help your community by volunteering at a local shelter, then Valath is perfect for you. It’s a volunteering website that gathers all opportunities from shelters around the Houston area, and puts them all in one place.',
        tech: [ruby, rails, javaScript, react, html, css],
        repo: 'https://github.com/JoeG21/valath'
    },
    {
        id: 4,
        photo: fullLK,
        video: 'https://www.youtube.com/embed/LLfWE3RWT3Q',
        title: lk,
        des: 'List Keeper makes tracking all of your notes convenient, and delete them with a simple click. A search bar feature makes it easy to navigate through all of your notes.Simply search for the title of the note, then it will filter out and give you the most relevant findings.',
        tech: [ruby, rails, javaScript, react, html, css],
        repo: 'https://github.com/JoeG21/mod4-project'
    },
    {
        id: 5,
        photo: fullQNK,
        video: 'https://www.youtube.com/embed/pWJkXkajmmk',
        title: qnk,
        des: 'Quest and Key is a game that tests your math skills while having the timer behind your back. Answering the question correctly will add time, but answer the question incorrectly then time will be taken off the timer. See how long you can last in order to beat your hight score.',
        tech: [ruby, rails, javaScript, jQuery, html, css],
        repo: 'https://github.com/JoeG21/Quest-Key'
    },
    {
        id: 6,
        photo: fullJP,
        video: 'https://www.youtube.com/embed/wI97XXtrkwA',
        title: jmakon,
        des: 'Jmakon Prime is an e-commerce website that allows you to browse through items. Users can also add items to their cart without having to be logged in. However, if a user does want to checkout without being logged in, then it redirects you to the Sign up / Log in page.',
        tech: [ruby, rails, boot, html, css],
        repo: 'https://github.com/JoeG21/Jmakon-Prime'
    }
]

export default projectCards