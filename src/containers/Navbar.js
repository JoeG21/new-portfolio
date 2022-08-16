import React from 'react'
import { useState, useEffect } from 'react';

import MenuContainer from './MenuContainer';

import logo from '../pictures/svg/logo.svg'

import {
    Link
} from 'react-router-dom';

import { motion } from 'framer-motion'

const Navbar = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const landscape = (
        <>
            <Link to='/projects' key={1}>
                Projects
            </Link>
            <Link to='/blogs' key={2}>
                Blogs
            </Link>
            <Link to='/contact' key={3}>
                Contact
            </Link>
        </>
    )

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1.5
            }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
    }

    return (
        <motion.div className='navbar'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='logo-con'>
                <Link to='/'>
                    <img src={logo} className='logo' alt='Joe C Gomez' />
                </Link>
            </div>
            {windowWidth < 1200 ? <MenuContainer location={props.location.pathname} /> : landscape}
        </motion.div>
    )
}

export default Navbar