import React from 'react'
import { useState, useEffect } from 'react';

import MenuContainer from './MenuContainer';

import logo from '../pictures/svg/logo.svg'

import {
    Link
} from 'react-router-dom';

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
            </Link>,
            <Link to='/blogs' key={2}>
                Blogs
            </Link>,
            <Link to='/contact' key={3}>
                Contact
            </Link>
        </>
    )

    return (
        <div className='navbar'>
            <div className='logo-con'>
                <Link to='/'>
                    <img src={logo} className='logo' alt='Joe C Gomez' />
                </Link>
            </div>
            {windowWidth < 1200 ? <MenuContainer location={props.location.pathname} /> : landscape}
        </div>
    )
}

export default Navbar