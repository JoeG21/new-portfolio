import React from 'react';
import { useState, useEffect } from 'react'

import BlogCard from './BlogCard'
import medium from '../pictures/svg/medium.svg'

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

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devjoe')
            .then(resp => resp.json())
            .then(resp => setBlogs(resp))
    }, [])

    const failFetch = (
        <div className='fail-blogs'>
            <h1> Having a hard time loading...
                <br />
                But you can check them out here!
            </h1>

            <a href='https://devjoe.medium.com/' alt='Medium: @devjoe'>
                <img src={medium} alt='Medium Logo' />
            </a>
        </div>
    )

    return (
        <>
            {/* {blogs.status === 'ok' ? failFetch : 'okay'} */}
            {blogs.status === 'ok' ?
                <motion.div className='Blogs'
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    {/* {blogs.items.map(blog => <BlogCard key={blog.id} blog={blog} />)} */}
                    {blogs.items.slice(0, 6).map(blog => <BlogCard key={blog.title} blog={blog} />)}
                </motion.div>
                :
                failFetch
            }
        </>
    )
}

export default Blogs