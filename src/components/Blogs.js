import React from 'react';
import { useState, useEffect } from 'react'

import BlogCard from './BlogCard'
import medium from '../pictures/svg/medium.svg'



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
                <div className='Blogs'>
                    {/* {blogs.items.map(blog => <BlogCard key={blog.id} blog={blog} />)} */}
                    {blogs.items.slice(0, 6).map(blog => <BlogCard key={blog.title} blog={blog} />)}
                </div>
                : 
                failFetch
            }
        </>
    )
}

export default Blogs