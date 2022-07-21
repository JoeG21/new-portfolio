import React from 'react'
import github from '../pictures/svg/github.svg'
import linkedin from '../pictures/svg/linkedin.svg'
import medium from '../pictures/svg/medium.svg'
import youtube from '../pictures/svg/youtube.svg'

const footerData = [
    {
        id: 1,
        label: 'Follow Me!',
        info: [
            <a href='https://github.com/JoeG21' alt='GitHub: JoeG1'> <img src={github} alt='GitHub Logo' /> </a>,
            <a href='https://linkedin.com/in/joe-c-gomez/' alt='LinkedIn: Joe C Gomez'> <img src={linkedin} alt='LinkedIn Logo' /> </a>,
            <a href='https://devjoe.medium.com/' alt='Medium: @devjoe'> <img src={medium} alt='Medium Logo' /> </a>,
            <a href='https://www.youtube.com/channel/UCwLqQxU0xFZefEVC3oix7Dw' alt='YouTube: Joe C Gomez'> <img src={youtube} alt='YouTube Logo' /> </a>
        ]
    },
    {
        id: 2,
        label: "Get In Touch!",
        info: [
            <a href="mailto:jcggomez@live.com" alt='Outlook Email'> jcggomez@live.com </a>,
        ]
    },
    {
        id: 3,
        label: 'Resume',
        info: [
            <a href='https://drive.google.com/uc?export=download&id=1lSrZotNPSUluojuQ0V9neCJHfjpWqisK' alt='Google Docs'>
                Download
            </a>
        ]
    }
]

export default footerData